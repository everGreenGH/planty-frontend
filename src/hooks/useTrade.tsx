import { useRouter } from "next/router";
import { useEffect } from "react";
import { parseEther } from "viem";
import { useWritePlantyPoolBuyAsset, useWritePlantyPoolSellAsset } from "~/generated";
import { useTransactionAwait } from "./useTransactionAwait";

export const useTrade = () => {
  const router = useRouter();
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
    await buyAsset({ args: [amount] });
  };

  const sell = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await sellAsset({ args: [amount] });
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
