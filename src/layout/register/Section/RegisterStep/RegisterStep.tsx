import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "~/components/atoms/Button/Button";
import Step1 from "~/public/step_1.svg";
import Step2 from "~/public/step_2.svg";
import Step3 from "~/public/step_3.svg";
import { RegisterStep1 } from "./RegisterStep1/RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2/RegisterStep2";
import { RegisterStep3 } from "./RegisterStep3/RegisterStep3";

export const RegisterStep = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const router = useRouter();
  return (
    <div className="-gap-10 flex max-h-[1120px] w-[770px] flex-col overflow-y-scroll rounded-3xl bg-theme-white p-10">
      {/* Header */}
      <div className="z-10 flex w-full items-center justify-between">
        <Button
          variant="nonOutlined"
          leadingIcon={<ArrowLeft className="h-5 w-5" />}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        <div className="flex items-center gap-1">
          <span className="text-16/h4 text-gray-600">Step 0{currentStep}/03</span>
        </div>
      </div>
      {/* Content */}
      {currentStep === 1 && <RegisterStep1 />}
      {currentStep === 2 && <RegisterStep2 />}
      {currentStep === 3 && <RegisterStep3 />}
      <div className={clsx("flex w-full justify-end gap-3", currentStep === 3 && "px-10")}>
        {currentStep !== 3 && (
          <Button variant="secondary" onClick={() => setCurrentStep(currentStep - 1)}>
            Back
          </Button>
        )}
        <Button
          variant="primary"
          className={currentStep === 3 ? "w-full" : ""}
          onClick={() => (currentStep < 3 ? setCurrentStep(currentStep + 1) : router.push("/market"))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
