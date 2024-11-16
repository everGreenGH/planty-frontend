import { useState } from "react";
import { Button } from "~/components/atoms/Button/Button";
import { Icon20 } from "~/components/atoms/Icon/Icon20";
import { Label } from "~/components/atoms/Label/Label";
import { Tab } from "~/components/atoms/Tab/Tab";
import { OrderForm } from "./OrderForm/OrderForm";

export const TokenInfo = () => {
  const tokenName = "PLANT";
  const [isBuy, setIsBuy] = useState(true);
  const [tab, setTab] = useState<"chart" | "plantInfo">("plantInfo");

  return (
    <div className="flex w-full flex-col items-start gap-3 p-6">
      {/* Title */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-brand-primary" />
        <div className="flex flex-col items-start gap-0.5">
          <div className="flex items-center gap-2">
            <span className="text-16/p text-black">${tokenName}</span>
            <div className="flex items-center justify-center rounded-full bg-brand-primary px-2 py-0.5 text-14/subtle text-theme-white">
              <span>On Public Sale</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-18/large text-black">$10,000</span>
            <span className="pt-0.5 text-14/subtle text-gray-600">/ ${tokenName}</span>
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
      <div className="grid min-w-[1080px] grid-cols-3 gap-10">
        {/* Chart */}
        {tab === "chart" && (
          <div className="col-span-2 flex flex-col gap-4 rounded-3xl bg-gray-100 p-6">
            <span className="text-16/medium-bold text-black">Chart</span>
          </div>
        )}
        {/* Plant Info */}
        {tab === "plantInfo" && (
          <div className="col-span-2 flex flex-col gap-4 rounded-3xl bg-gray-100 p-6">
            <span className="text-16/medium-bold text-black">Plant Info</span>
          </div>
        )}
        {/* Order */}
        <div className="col-span-1 flex flex-col gap-5 rounded-3xl bg-gray-100 p-6">
          <span className="text-16/medium-bold text-black">Order</span>
          <div className="flex w-full flex-col gap-4">
            <Tab
              tabs={[
                { name: `Buy ${tokenName}`, handleClick: () => setIsBuy(true) },
                { name: `Sell ${tokenName}`, handleClick: () => setIsBuy(false) },
              ]}
            />
            <OrderForm isBuy={isBuy} />
            <div className="flex w-full flex-col gap-4">
              <Label label="Receipt" />
              <div className="flex w-full flex-col gap-1">
                <div className="flex w-full justify-between">
                  <span className="text-14/subtle text-gray-600">You will pay</span>
                  <div className="flex items-center gap-1">
                    <span className="text-16/medium-bold text-gray-950">0</span>
                    <Icon20.USDC className="scale-75" />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <span className="text-14/subtle text-gray-600">Protocol Fee</span>
                  <div className="flex items-center gap-1">
                    <span className="text-16/medium-bold text-gray-950">0</span>
                    <Icon20.USDC className="scale-75" />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <span className="text-14/subtle text-gray-600">Trade Fee</span>
                  <div className="flex items-center gap-1">
                    <span className="text-16/medium-bold text-gray-950">0</span>
                    <Icon20.USDC className="scale-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button size="large">{isBuy ? "Buy" : "Sell"}</Button>
        </div>
      </div>
    </div>
  );
};
