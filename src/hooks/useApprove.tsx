import { Address, parseEther } from "viem";
import { useWriteErc20Approve } from "~/generated";
import { useTransactionAwait } from "./useTransactionAwait";

export function useApprove() {
  const { data: hash, writeContractAsync, isPending: isTransactionLoading } = useWriteErc20Approve();

  const approve = async (tokenAddress: string, spender: string, amount: number) => {
    await writeContractAsync({
      address: tokenAddress as Address,
      args: [spender as Address, parseEther(amount.toString())],
    });
  };

  const { isLoading: isConfirmLoading, isSuccess } = useTransactionAwait(hash, "Approve");

  const isLoading = isTransactionLoading || isConfirmLoading;

  return {
    approve,
    isLoading,
    isSuccess,
  };
}
