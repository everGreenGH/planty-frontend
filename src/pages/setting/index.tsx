import { useState } from "react";
import { Toaster } from "sonner";
import { Sidebar } from "~/layout/common/Sidebar/Sidebar";
import { DeviceConnection } from "~/layout/setting/Section/DeviceConnection/DeviceConnection";
import { UploadPlantData } from "~/layout/setting/Section/UploadPlantData/UploadPlantData";

export const Setting = () => {
  const [isDeviceConnectionStep, setIsDeviceConnectionStep] = useState(false);
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <div className="flex w-full justify-center px-6">
        {!!isDeviceConnectionStep ? (
          <DeviceConnection />
        ) : (
          <UploadPlantData onMoveToNextStep={() => setIsDeviceConnectionStep(true)} />
        )}
      </div>
      <Toaster className="!gap-5 !text-left" toastOptions={{ className: "font-sans text-14/subtle" }} />
    </div>
  );
};

export default Setting;
