import Image from "next/image";
import { useState } from "react";
import { RegisterStep } from "~/layout/register/Section/RegisterStep/RegisterStep";
import { SelectRole } from "~/layout/register/Section/SelectRole/SelectRole";
import PlantyLogoWhite from "~/public/planty_logo_white.svg";
import RegisterBackground from "~/public/register_background.png";

export const Register = () => {
  const [isPlantManager, setIsPlantManager] = useState<boolean>(false);
  return (
    <div className="relative flex h-screen w-screen items-start justify-center p-10">
      <Image src={RegisterBackground} alt="register background" className="absolute inset-0 -z-10 scale-125" />
      {/* Logo */}
      <div className="absolute left-10 top-10 flex items-center gap-2 px-2">
        <PlantyLogoWhite className="text-theme-white" />
        <span className="text-24/h3 text-theme-white">PLANTY</span>
      </div>
      {!isPlantManager && <SelectRole handleRole={setIsPlantManager} />}
      {isPlantManager && <RegisterStep />}
    </div>
  );
};

export default Register;
