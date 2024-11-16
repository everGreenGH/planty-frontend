import { Address, parseEther } from "viem";
import { useWritePlantyPoolBuyAssetDuringPublicSale, useWritePlantyPoolSellAssetDuringPublicSale } from "~/generated";
import { PLANTY_POOL_ADDRESS } from "~/utils/constants";
import { NetworkType } from "~/utils/network";
import { useTransactionAwait } from "./useTransactionAwait";

export const usePublicSaleTrade = () => {
  const network = process.env.NEXT_PUBLIC_NETWORK_NAME as NetworkType;
  const poolAddress = PLANTY_POOL_ADDRESS[network] as Address;

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
    await buyAssetDuringPublicSale({ args: [amount], address: poolAddress });
  };

  const sellPublicSale = async (rawPlantyTokenAmount: number) => {
    const amount = parseEther(rawPlantyTokenAmount.toString());
    await sellAssetDuringPublicSale({ args: [amount], address: poolAddress });
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
