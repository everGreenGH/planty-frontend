import { useRouter } from "next/router";
import PlantInvestor from "~/public/investor.svg";
import PlantManager from "~/public/plant_manager.svg";

export const SelectRole = ({ handleRole }: { handleRole: (isPlantManager: boolean) => void }) => {
  const router = useRouter();
  return (
    <div className="-gap-10 flex min-h-[720px] w-[770px] flex-col items-start justify-center overflow-y-scroll rounded-3xl bg-theme-white p-20">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-2">
        <span className="text-24/h3 text-gray-950">Who are you?</span>
        <span className="text-16/p text-gray-500">Are you here to manage plants or to invest in their growth?</span>
      </div>
      <div className="mb-10 flex flex-col gap-5">
        <PlantManager
          className="custom-shadow rounded-xl border border-transparent hover:border-brand-primary"
          onClick={() => handleRole(true)}
        />
        <PlantInvestor
          className="custom-shadow rounded-xl border border-transparent hover:border-brand-primary"
          onClick={() => router.push("/market")}
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-16/p text-gray-500">Already have an account?</span>
        <span className="text-16/p text-brand-primary">Sign In</span>
      </div>
    </div>
  );
};
