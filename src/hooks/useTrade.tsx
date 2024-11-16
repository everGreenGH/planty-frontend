import { useRouter } from "next/router";
import { useEffect } from "react";
import { Address, parseEther } from "viem";
import { useWritePlantyPoolBuyAsset, useWritePlantyPoolSellAsset } from "~/generated";
import { PLANTY_POOL_ADDRESS } from "~/utils/constants";
import { NetworkType } from "~/utils/network";
import { useTransactionAwait } from "./useTransactionAwait";

export const useTrade = () => {
  const router = useRouter();
  const network = process.env.NEXT_PUBLIC_NETWORK_NAME as NetworkType;
  const poolAddress = PLANTY_POOL_ADDRESS[network] as Address;
  const {
    data: buyTxHash,
    writeContractAsync: buyAsset,
    isPending: isBuyTransactionLoading,
  } = useWritePlantyPoolBuyAsset();
  const {
    data: sellTxHash,
    writeContractAsync: sellAsset,
    isPending: isSellTransactionLoading,
  } = useWritePlantyPoolSellAsset();

  const buy = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await buyAsset({ args: [amount], address: poolAddress });
  };

  const sell = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await sellAsset({ args: [amount], address: poolAddress });
  };

  const { isLoading: isBuyConfirmLoading, isSuccess: isBuySuccess } = useTransactionAwait(buyTxHash, "Buy Token");
  const { isLoading: isSellConfirmLoading, isSuccess: isSellSuccess } = useTransactionAwait(sellTxHash, "Sell Token");

  useEffect(() => {
    if (isBuySuccess || isSellSuccess) {
      router.reload();
    }
  }, [isBuySuccess, isSellSuccess]);

  const isBuyLoading = isBuyTransactionLoading || isBuyConfirmLoading;
  const isSellLoading = isSellTransactionLoading || isSellConfirmLoading;

  return {
    buy,
    sell,
    isBuyLoading,
    isSellLoading,
    isBuySuccess,
    isSellSuccess,
  };
};
