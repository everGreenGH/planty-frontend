import { ContractConfig, defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { plantyFactoryABI, plantyPoolABI, plantyTokenABI } from "./src/contract";

const contracts: ContractConfig[] = [
  {
    name: "PlantyFactory",
    abi: plantyFactoryABI,
    address: "0x39374E9E734114672D41DE9c9a4E7eBf877c08AA",
  },
  {
    name: "PlantyToken",
    abi: plantyTokenABI,
    address: "0xFa509737CC5FAcdc4AdecB0A94A579118fCbc97E",
  },
  {
    name: "PlantyPool",
    abi: plantyPoolABI,
    address: "0xA72A5A09C980a376a26bB13f0f1c0a2b6611A2C7",
  },
];

export default defineConfig({
  out: "src/generated.ts",
  contracts,
  plugins: [react()],
});
