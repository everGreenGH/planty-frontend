import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Address, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~/components/atoms/Button/Button";
import { Icon20 } from "~/components/atoms/Icon/Icon20";
import { Label } from "~/components/atoms/Label/Label";
import { Skeleton } from "~/components/atoms/Skeleton/Skeleton";
import { Tab } from "~/components/atoms/Tab/Tab";
import Textfield from "~/components/atoms/Textfield/Textfield";
import { useReadPlantyPoolGetBuyInfo } from "~/generated";
import { useApprove } from "~/hooks/useApprove";
import { useNeedApprove } from "~/hooks/useNeedApprove";
import { usePublicSaleTrade } from "~/hooks/usePublicSaleTrade";
import { useTrade } from "~/hooks/useTrade";
import { USDC_ADDRESS } from "~/utils/constants";
import { formatBigInt } from "~/utils/formatter";
import { NetworkType } from "~/utils/network";
import { useReadErc20BalanceOf } from "../../../../../generated";

export interface OrderFormInput {
  amount: number;
}

export interface OrderFormProps {
  plantyTokenAddress: string;
  plantyPoolAddress: string;
  isPublicSaleActive: boolean;
}

export const OrderForm = ({ plantyTokenAddress, plantyPoolAddress, isPublicSaleActive }: OrderFormProps) => {
  const [isBuy, setIsBuy] = useState(true);
  const { approve, isLoading: isApproveLoading, isSuccess: isApproveSuccess } = useApprove();
  const { address: account } = useAccount();
  const network: NetworkType = process.env.NEXT_PUBLIC_NETWORK_NAME as NetworkType;

  const methods = useForm<OrderFormInput>({ mode: "onChange", shouldFocusError: true });
  const {
    handleSubmit,
    watch,
    formState: { errors },
    resetField,
  } = methods;

  const amount = watch("amount");

  /* Read Info */
  const { data: balance, isLoading: balanceLoading } = useReadErc20BalanceOf({
    address: USDC_ADDRESS[network] as Address,
    args: [account as Address],
  });
  const { data: buyInfo, isLoading: buyInfoLoading } = useReadPlantyPoolGetBuyInfo({
    args: [!!amount ? parseEther(amount.toString()) : BigInt(0)],
  });

  const [usdcNeeded, , protocolFee, tradeFee] = buyInfo ?? [];

  const formattedUsdcNeeded = usdcNeeded ? formatBigInt(usdcNeeded) : "0.00";
  const formattedProtocolFee = protocolFee ? formatBigInt(protocolFee) : "0.0000";
  const formattedTradeFee = tradeFee ? formatBigInt(tradeFee) : "0.0000";

  const fetchedNeedAllowance = useNeedApprove(
    isBuy ? USDC_ADDRESS[network] : plantyTokenAddress,
    plantyPoolAddress,
    isBuy ? Number(usdcNeeded ?? 0) / 1e18 : Number(amount ?? 0) / 1e18,
  );

  const [needApprove, setNeedApprove] = useState(true);

  useEffect(() => {
    if (fetchedNeedAllowance) {
      setNeedApprove(fetchedNeedAllowance);
    }
  }, [fetchedNeedAllowance]);

  useEffect(() => {
    if (isApproveSuccess) {
      setNeedApprove(false);
    }
  }, [isApproveSuccess]);

  const { buyPublicSale, sellPublicSale, isBuyPublicLoading, isSellPublicLoading } = usePublicSaleTrade();
  const { buy, sell, isBuyLoading, isSellLoading } = useTrade();

  const onValid = async () => {
    if (needApprove) {
      await approve(
        isBuy ? USDC_ADDRESS[network] : plantyTokenAddress,
        plantyPoolAddress,
        isBuy ? Number(usdcNeeded) / 1e18 : Number(amount) / 1e18,
      );
      return;
    }
    if (isBuy) {
      isPublicSaleActive ? await buyPublicSale(amount) : await buy(amount);
    } else {
      isPublicSaleActive ? await sellPublicSale(amount) : await sell(amount);
    }
  };

  const onInvalid = () => {
    console.error("invalid input");
  };

  const isLoading = isApproveLoading || isBuyPublicLoading || isSellPublicLoading || isBuyLoading || isSellLoading;

  const [showReceiptDetails, setShowReceiptDetails] = useState(false);

  return (
    <FormProvider {...methods}>
      <form className="flex w-full flex-col items-start gap-4" onSubmit={handleSubmit(onValid, onInvalid)}>
        <Tab
          tabs={[
            {
              name: `Buy Token`,
              handleClick: () => {
                resetField("amount");
                setIsBuy(true);
              },
            },
            {
              name: `Sell Token`,
              handleClick: () => {
                resetField("amount");
                setIsBuy(false);
              },
            },
          ]}
        />
        <Textfield
          {...methods.register("amount", { valueAsNumber: true })}
          type="number"
          required
          className="w-full"
          error={errors.amount?.message}
          label="Amount"
          placeholder="Please enter the amount."
        />
        {/* Balance */}
        <div className="flex w-full justify-between">
          <Label label="Balance" />
          <div className="flex items-center gap-1">
            {balanceLoading ? (
              <Skeleton className="h-6 w-[100px]" />
            ) : (
              <span className="text-16/medium-bold text-gray-950">{formatBigInt(balance!)}</span>
            )}
            <Icon20.USDC className="scale-75" />
          </div>
        </div>
        {/* Receipt */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full justify-between">
            <Label label="You will pay" />
            <div className="flex items-center gap-1">
              {!buyInfoLoading ? (
                <span className="text-16/medium-bold text-gray-950">{formattedUsdcNeeded}</span>
              ) : (
                <Skeleton className="h-6 w-[100px]" />
              )}
              <Icon20.USDC className="scale-75" />
              <Button
                variant="nonOutlined"
                size="small"
                iconOnly
                trailingIcon={
                  <ChevronDown
                    className={clsx(
                      "text-gray-400 transition-all duration-300",
                      showReceiptDetails ? "rotate-180" : "rotate-0",
                    )}
                  />
                }
                onClick={() => {
                  setShowReceiptDetails(!showReceiptDetails);
                }}
              />
            </div>
          </div>
          <div
            className={clsx(
              "flex w-full flex-col gap-1 transition-all duration-300",
              showReceiptDetails ? "max-h-[400px]" : "max-h-0",
            )}
          >
            <div
              className={clsx(
                "flex w-full flex-col gap-1 transition-all duration-300",
                showReceiptDetails ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="flex w-full justify-between">
                <span className="text-14/subtle text-gray-600">Protocol Fee</span>
                <div className="flex items-center gap-1">
                  {!buyInfoLoading ? (
                    <span className="text-16/medium-bold text-gray-950">{formattedProtocolFee}</span>
                  ) : (
                    <Skeleton className="h-6 w-[100px]" />
                  )}
                  <Icon20.USDC className="scale-75" />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <span className="text-14/subtle text-gray-600">Trade Fee</span>
                <div className="flex items-center gap-1">
                  {!buyInfoLoading ? (
                    <span className="text-16/medium-bold text-gray-950">{formattedTradeFee}</span>
                  ) : (
                    <Skeleton className="h-6 w-[100px]" />
                  )}
                  <Icon20.USDC className="scale-75" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" size="large" className="z-10 mt-1 w-full" disabled={isLoading}>
          {needApprove ? "Approve Token" : isBuy ? "Buy" : "Sell"}
        </Button>
      </form>
    </FormProvider>
  );
};
