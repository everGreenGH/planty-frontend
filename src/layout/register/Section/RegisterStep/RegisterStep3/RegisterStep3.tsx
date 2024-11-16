import Step3Background from "~/public/step3_background.svg";
import Step3Check from "~/public/step3_check_icon.svg";

export const RegisterStep3 = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-start gap-4 p-6">
      <Step3Background className="absolute -left-10 -top-36" />
      <Step3Check className="absolute left-[282px] top-[110px] z-10" />
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <span className="mt-64 text-24/h3 text-gray-950">Registration is completed!!</span>
        <span className="text-center text-16/p text-gray-500">
          Your application is currently under review.
          <br /> You will receive a notification once it is complete.
        </span>
      </div>
    </div>
  );
};
