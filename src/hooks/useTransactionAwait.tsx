import { CheckIcon, X } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "sonner";
import { Address } from "viem";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

export function useTransactionAwait(hash: Address | undefined, transactionName: string, redirectPath?: string) {
  const { address: account } = useAccount();
  const router = useRouter();
  const { data, isError, isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isLoading && hash && account) {
      toast.info(transactionName, {
        description: "Transaction was sent.",
      });
    }
  }, [isLoading, hash, account]);

  useEffect(() => {
    if (isError && hash) {
      toast.error(transactionName, {
        description: "Transaction failed.",
        icon: <X className="rounded-full bg-red-500 p-[2px] text-gray-50" strokeWidth={3} size={16} />,
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess && hash) {
      toast.success(transactionName, {
        description: "Transaction confirmed.",
        icon: <CheckIcon className="rounded-full bg-green-600 p-[2px] text-gray-50" strokeWidth={3} size={16} />,
      });
      if (redirectPath) {
        router.push(redirectPath);
      }
    }
  }, [isSuccess]);

  return {
    data,
    isError,
    isLoading,
    isSuccess,
  };
}
