import clsx from "clsx";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button } from "~/components/atoms/Button/Button";
import {
  useReadPlantyPoolIsPublicSaleActive,
  useReadPlantyPoolPublicSaleEndTime,
  useReadPlantyPoolSpotPrice,
} from "~/generated";
import { formatBigInt, formatLeftTimestamp } from "~/utils/formatter";
import { OrderForm } from "./OrderForm/OrderForm";

export const TokenInfo = ({ poolAddress, tokenAddress }: { poolAddress: string; tokenAddress: string }) => {
  const tokenName = "PLANT";
  const [tab, setTab] = useState<"chart" | "plantInfo">("plantInfo");

  const { data: publicSaleEndTime } = useReadPlantyPoolPublicSaleEndTime();
  const isPublicSaleActive = publicSaleEndTime && Number(publicSaleEndTime) < dayjs().unix();
  const { data: rawSpotPrice } = useReadPlantyPoolSpotPrice();

  const [leftTime, setLeftTime] = useState(0);
  const spotPrice = rawSpotPrice ? formatBigInt(rawSpotPrice) : undefined;

  useEffect(() => {
    if (publicSaleEndTime) {
      setLeftTime(Number(publicSaleEndTime) - dayjs().unix());
    }
  }, [publicSaleEndTime]);

  return (
    <div className="flex w-full flex-col items-start gap-3 p-6">
      {/* Title */}
      <div className="mb-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-brand-primary" />
        <div className="flex flex-col items-start gap-0.5">
          <div className="flex items-center gap-2">
            <span className="text-16/p text-black">{tokenName}</span>
            <div
              className={clsx(
                "flex items-center justify-center rounded-full px-2 py-0.5 text-14/subtle text-black",
                isPublicSaleActive ? "bg-yellow-300" : "bg-brand-secondary",
              )}
            >
              <span>{isPublicSaleActive ? "Public Sale" : "In Market"}</span>
            </div>
            {isPublicSaleActive && (
              <div className="flex items-center justify-center rounded-full bg-gray-200 px-2 py-0.5 text-14/subtle text-yellow-700">
                <span>{formatLeftTimestamp(leftTime)} left</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-18/large text-black">${spotPrice}</span>
            <span className="pt-0.5 text-14/subtle text-gray-600">/ {tokenName}</span>
          </div>
        </div>
      </div>
      {/* Tab */}
      <div className="flex items-center gap-4">
        <Button
          className="!rounded-full"
          variant="nonOutlined"
          selected={tab === "chart"}
          onClick={() => setTab("chart")}
        >
          Chart
        </Button>
        <Button
          className="!rounded-full"
          variant="nonOutlined"
          selected={tab === "plantInfo"}
          onClick={() => setTab("plantInfo")}
        >
          Info
        </Button>
      </div>
      {/* Contents */}
      <div className="grid w-full min-w-[960px] grid-cols-5 gap-10">
        {/* Chart */}
        {tab === "chart" && (
          <div className="col-span-3 flex flex-col gap-4 rounded-3xl bg-theme-white p-6">
            <span className="text-16/medium-bold text-black">Chart</span>
          </div>
        )}
        {/* Plant Info */}
        {tab === "plantInfo" && (
          <div className="col-span-3 flex flex-col gap-4 rounded-3xl bg-theme-white p-6">
            <span className="text-16/medium-bold text-black">Plant Info</span>
          </div>
        )}
        {/* Order */}
        <div className="col-span-2 flex w-full flex-col gap-3 rounded-3xl bg-theme-white p-6">
          <span className="text-16/medium-bold text-black">Order</span>
          <OrderForm
            isPublicSaleActive={!!isPublicSaleActive}
            plantyTokenAddress={tokenAddress}
            plantyPoolAddress={poolAddress}
          />
        </div>
      </div>
    </div>
  );
};
