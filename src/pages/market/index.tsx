import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Skeleton } from "~/components/atoms/Skeleton/Skeleton";
import { Sidebar } from "~/layout/common/Sidebar/Sidebar";
import { TokenInfo } from "~/layout/token/Section/TokenInfo/TokenInfo";
import { plantyPoolAbi, readPlantyPoolAssetToken, useReadPlantyFactoryGetAllPools } from "../../generated";
import { wagmiConfig } from "../_app";

export interface PoolInfo {
  poolAddress: string;
  tokenAddress: string;
}

export const MarketPage = () => {
  const { data: pools, isLoading: poolsLoading } = useReadPlantyFactoryGetAllPools();

  const [poolInfos, setPoolInfos] = useState<PoolInfo[]>([]);

  const initializePoolInfos = async (poolAddresses: string[]) => {
    const poolInfos = await Promise.all(
      poolAddresses.map(async (poolAddress) => {
        const tokenAddress = await readContract(wagmiConfig, {
          abi: plantyPoolAbi,
          address: poolAddress as `0x${string}`,
          functionName: "assetToken",
        });
        return { poolAddress, tokenAddress };
      }),
    );
    setPoolInfos(poolInfos);
  };

  useEffect(() => {
    if (pools) {
      initializePoolInfos(pools as string[]);
    }
  }, [pools]);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <div className="flex w-full justify-center px-6">
        {poolInfos[0] ? (
          <TokenInfo tokenAddress={poolInfos[0].tokenAddress} poolAddress={poolInfos[0].poolAddress} />
        ) : (
          <Skeleton className="h-full w-full" />
        )}
      </div>
      <Toaster className="!gap-5 !text-left" toastOptions={{ className: "font-sans text-14/subtle" }} />
    </div>
  );
};

export default MarketPage;
