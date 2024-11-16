import clsx from "clsx";
import { CrosshairMode, createChart } from "lightweight-charts";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { UIProps } from "~/components/UIProps";
import { formatBigInt } from "~/utils/formatter";
import { getLocalStorage } from "~/utils/local-storage";

export interface PriceData {
  spotPrice: string;
  timestamp: string;
}

export const PriceChart = ({ className }: UIProps.Div) => {
  const [pointedPrice, setPointedPrice] = useState<number>(0);

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartInternal, setChartInternal] = useState<any>();
  const [series, setSeries] = useState<any>();

  const [isAnimateSpin, setIsAnimateSpin] = useState(false);

  /* Chart Datas */
  const [chartDatas, setChartDatas] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const rawPriceDatas = getLocalStorage("price");
      const priceDatas: PriceData[] = rawPriceDatas ? JSON.parse(rawPriceDatas) : [];
      setChartDatas(priceDatas);
    };

    fetchData(); // 초기 데이터 로드

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  /* Chart Scale and Size */
  const handleResize = useCallback(() => {
    if (chartInternal && chartContainerRef?.current?.parentElement) {
      if (chartContainerRef.current.offsetWidth - 32 > 0) {
        chartInternal.resize(chartContainerRef.current.offsetWidth - 32, chartContainerRef.current.offsetHeight);
        chartInternal.timeScale().fitContent();
        chartInternal.timeScale().scrollToPosition(0, false);
      }
    }
  }, [chartContainerRef, chartInternal]);

  const isClient = typeof window === "object";
  useEffect(() => {
    if (!isClient) {
      return;
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient, chartContainerRef, handleResize]);

  /* Chart Creation */
  useLayoutEffect(() => {
    if (!chartContainerRef.current) return;
    if (chartContainerRef.current.hasChildNodes()) chartContainerRef.current.innerHTML = "";

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.parentElement?.clientWidth,
      height: chartContainerRef.current.parentElement?.clientHeight || 300,
      layout: {
        background: {
          color: "transparent",
        },
        textColor: "black",
      },
      grid: {
        vertLines: {
          color: "#f4f4f4",
        },
        horzLines: {
          color: "#f4f4f4",
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      rightPriceScale: {
        visible: true,
        borderColor: "transparent",
        textColor: "#a8a8a8",
      },
      timeScale: {
        visible: true,
        fixLeftEdge: true,
        fixRightEdge: true,
        timeVisible: true,
        borderColor: "transparent",
      },
      handleScale: {
        mouseWheel: false,
      },
      handleScroll: {
        pressedMouseMove: false,
        vertTouchDrag: false,
        horzTouchDrag: false,
      },
    });

    /* Add Series and Data */
    const areaSeries = chart.addAreaSeries({
      topColor: "#B0EEA860",
      bottomColor: "#B0EEA860",
      lineColor: "#15A900",
    });

    const areaData = chartDatas.map((chartData) => ({ time: chartData.timestamp, value: chartData.spotPrice }));
    areaSeries.setData(areaData);
    setSeries(areaSeries);

    setChartInternal(chart);
    handleResize();
  }, [chartDatas]);

  /* Chart Crosshair */
  const crosshairMoveHandler = useCallback(
    (param: any) => {
      const seriesData = param.seriesData.get(series);
      if (param.point && seriesData) {
        const { value } = seriesData;
        setPointedPrice(value);
      } else {
        setPointedPrice(0);
      }
    },
    [series],
  );

  useEffect(() => {
    if (!chartInternal) return;
    chartInternal.subscribeCrosshairMove(crosshairMoveHandler);
    return () => chartInternal.unsubscribeCrosshairMove(crosshairMoveHandler);
  }, [chartInternal]);

  /* Chart Refresh */
  useEffect(() => {
    if (isAnimateSpin) {
      setTimeout(() => {
        setIsAnimateSpin(false);
      }, 2000);
    }
  }, [isAnimateSpin]);

  return (
    <div className={clsx("relative flex w-full flex-col gap-5 rounded-3xl bg-gray-50 py-6 pl-6", className)}>
      {/* Chart Header */}
      <div className="absolute top-6 z-10 flex w-full items-start justify-between pr-6">
        {/* Price */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-18/heading/s text-gray-950">Price</span>
          <div className="flex items-center gap-4">
            <span className="text-24/heading/l text-gray-950">$(pointedPrice)</span>
          </div>
        </div>
      </div>
      {/* Chart Container */}
      <div className="flex min-h-[360px] items-center justify-center" ref={chartContainerRef}></div>
    </div>
  );
};
