import { Address, parseEther } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { erc20ABI } from "~/contract";

export const useNeedApprove = (tokenAddress: string, spender: string, amount: number) => {
  const { address: account } = useAccount();

  const { data: rawAllowance } = useReadContract({
    address: tokenAddress as Address,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account as Address, spender as Address],
  });

  const allowance = Number(rawAllowance) / 1e18;
  console.log(allowance, amount);

  return Boolean((allowance === 0 && amount === 0) || allowance < amount);
};
