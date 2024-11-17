import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "~/components/atoms/Button/Button";
import DeviceConnectionImage from "~/public/device_connection.svg";
import DeviceConnectionSecondImage from "~/public/device_connection_2.svg";

export const DeviceConnection = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const router = useRouter();
  return (
    <div className="flex w-full max-w-[600px] flex-col justify-center gap-6">
      <span className="text-24/h3 text-gray-950">Device Connection</span>
      {isFirstPage ? <DeviceConnectionImage /> : <DeviceConnectionSecondImage />}
      <Button onClick={isFirstPage ? () => setIsFirstPage(!isFirstPage) : () => router.push("/market")}>Next</Button>
    </div>
  );
};
