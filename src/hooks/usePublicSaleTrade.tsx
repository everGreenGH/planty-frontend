import { parseEther } from "viem";
import { useWritePlantyPoolBuyAssetDuringPublicSale, useWritePlantyPoolSellAssetDuringPublicSale } from "~/generated";
import { useTransactionAwait } from "./useTransactionAwait";

export const usePublicSaleTrade = () => {
  const {
    data: buyTxHash,
    writeContractAsync: buyAssetDuringPublicSale,
    isPending: isBuyTransactionLoading,
  } = useWritePlantyPoolBuyAssetDuringPublicSale();
  const {
    data: sellTxHash,
    writeContractAsync: sellAssetDuringPublicSale,
    isPending: isSellTransactionLoading,
  } = useWritePlantyPoolSellAssetDuringPublicSale();

  const buyPublicSale = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await buyAssetDuringPublicSale({ args: [amount] });
  };

  const sellPublicSale = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await sellAssetDuringPublicSale({ args: [amount] });
  };

  const { isLoading: isBuyConfirmLoading, isSuccess: isBuySuccess } = useTransactionAwait(buyTxHash, "Buy Public Sale");
  const { isLoading: isSellConfirmLoading, isSuccess: isSellSuccess } = useTransactionAwait(
    sellTxHash,
    "Sell Public Sale",
  );

  const isBuyPublicLoading = isBuyTransactionLoading || isBuyConfirmLoading;
  const isSellPublicLoading = isSellTransactionLoading || isSellConfirmLoading;

  return {
    buyPublicSale,
    sellPublicSale,
    isBuyPublicLoading,
    isSellPublicLoading,
    isBuySuccess,
    isSellSuccess,
  };
};
