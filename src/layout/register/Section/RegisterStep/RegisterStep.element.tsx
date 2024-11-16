import clsx from "clsx";

export const RegisterStepDiagram = ({ currentStep, totalStep }: { currentStep: number; totalStep: number }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full justify-center gap-10">
        {Array.from({ length: totalStep }).map((_, index) => (
          <div
            key={index}
            className={clsx("flex h-10 w-10 rounded-full bg-gray-200", index < currentStep && "bg-brand-primary")}
          ></div>
        ))}
      </div>
    </div>
  );
};
