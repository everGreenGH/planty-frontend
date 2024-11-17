import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/atoms/Button/Button";
import { useModalContext } from "~/contexts/ModalProvider";
import { useReadPlantyPoolPublicSaleEndTime, useReadPlantyPoolSpotPrice, useReadPlantyTokenName } from "~/generated";
import { useLitSessionSignature } from "~/hooks/useLitSessionSignature";
import PengtoshiProfile from "~/public/pengtoshi_test_profile.png";
import PlantImage from "~/public/plant.png";
import TokenTable from "~/public/token_table.svg";
import { formatBigInt, formatLeftTimestamp } from "~/utils/formatter";
import { litNodeClient } from "~/utils/lit-action.config";
import { getLocalStorage, setLocalStorage } from "~/utils/local-storage";
import { OrderForm } from "./OrderForm/OrderForm";
import { PriceChart } from "./PriceChart/PriceChart";
import { TokenValueModal } from "../../Modal/TokenValueModal/TokenValueModal";

export const TokenInfo = ({ poolAddress, tokenAddress }: { poolAddress: string; tokenAddress: string }) => {
  const [tab, setTab] = useState<"chart" | "plantInfo">("chart");
  const { openModal } = useModalContext();

  const { data: tokenName } = useReadPlantyTokenName();
  const { data: publicSaleEndTime } = useReadPlantyPoolPublicSaleEndTime();
  const isPublicSaleActive = publicSaleEndTime && Number(publicSaleEndTime) > dayjs().unix();
  const { data: rawSpotPrice } = useReadPlantyPoolSpotPrice();

  const [leftTime, setLeftTime] = useState(0);
  const spotPrice = rawSpotPrice ? formatBigInt(rawSpotPrice) : undefined;

  const litActionCode = `const calculateSpotPrice = () => {
    const spotPriceNumber = Number(rawSpotPrice) / 1e18;
    LitActions.setResponse({ response: \`spotPriceNumber: \${spotPriceNumber}\` });
  };
  calculateSpotPrice();`;

  const updateChartDataWithLit = async () => {
    try {
      const sessionSignatures = await useLitSessionSignature();
      await litNodeClient.executeJs({
        sessionSigs: sessionSignatures,
        code: litActionCode,
        jsParams: {
          rawSpotPrice,
        },
      });
      // Error Seen: There was an error getting the signing shares from the nodes
      toast.success("Update chart data with Lit");
    } catch (error) {
      toast.error("Failed to update chart data with Lit");
    }
  };

  useEffect(() => {
    if (publicSaleEndTime) {
      setLeftTime(Number(publicSaleEndTime) - dayjs().unix());
    }
  }, [publicSaleEndTime]);

  useEffect(() => {
    if (spotPrice) {
      const timestamp = dayjs().unix();
      const spotPriceNumber = Number(rawSpotPrice) / 1e18;

      if (typeof spotPriceNumber === "number") {
        const rawPriceDatas = getLocalStorage("price");
        const priceDatas: { spotPrice: number; timestamp: number }[] = rawPriceDatas ? JSON.parse(rawPriceDatas) : [];
        const lastTimestamp = priceDatas[priceDatas.length - 1]?.timestamp;
        if (!lastTimestamp || timestamp - lastTimestamp > 10) {
          priceDatas.push({ spotPrice: spotPriceNumber, timestamp });
          setLocalStorage("price", JSON.stringify(priceDatas));
        }
      }
    }
  }, [spotPrice]);

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
            <PriceChart updateChartDataWithLit={updateChartDataWithLit} spotPrice={Number(spotPrice ?? 0) / 1e18} />
          </div>
        )}
        {/* Plant Info */}
        {tab === "plantInfo" && (
          <div className="col-span-3 flex flex-col gap-4 rounded-3xl bg-theme-white p-6">
            <span className="text-16/medium-bold text-black">Plant Info</span>
            <div className="flex items-start gap-10">
              <Image src={PlantImage} alt="plant" width={240} className="rounded-3xl" />
              <div className="flex w-full flex-col gap-4">
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Plant Manager</span>
                  <div className="flex items-center gap-2">
                    <Image src={PengtoshiProfile} alt="pengtoshi" width={20} height={20} className="rounded-full" />
                    <span className="text-14/large text-black">Pengtoshi</span>
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">TVL</span>
                  <span className="text-14/large text-black">
                    ${rawSpotPrice ? (Number(rawSpotPrice) / 1e18) * 1000000 : 0}
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Temperature</span>
                  <span className="text-14/large text-black">20°C</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Humidity</span>
                  <span className="text-14/large text-black">33%</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Report Started</span>
                  <span className="text-14/large text-black">2024.10.11 05:11</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Last Update</span>
                  <span className="text-14/large text-black">2024.11.17 04:24</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-14/medium text-gray-500">Plant Value (estimated)</span>
                  <Button variant="secondary" size="small" onClick={() => openModal(<TokenValueModal />)}>
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Order */}
        <div className="col-span-2 flex h-fit w-full flex-col gap-3 rounded-3xl bg-theme-white p-6">
          <span className="text-16/medium-bold text-black">Order</span>
          <OrderForm
            isPublicSaleActive={!!isPublicSaleActive}
            plantyTokenAddress={tokenAddress}
            plantyPoolAddress={poolAddress}
            spotPrice={spotPrice ?? "0.00"}
          />
        </div>
      </div>
      {/* List */}
      <TokenTable className="mt-6" />
    </div>
  );
};
