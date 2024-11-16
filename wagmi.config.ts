import { ContractConfig, defineConfig } from "@wagmi/cli";
import { actions, react } from "@wagmi/cli/plugins";
import { Address } from "viem";
import { PLANTY_FACTORY_ADDRESS, PLANTY_POOL_ADDRESS, PLANTY_TOKEN_ADDRESS } from "~/utils/constants";
import { erc20ABI, plantyFactoryABI, plantyPoolABI, plantyTokenABI } from "./src/contract";

const contracts: ContractConfig[] = [
  {
    name: "PlantyFactory",
    abi: plantyFactoryABI,
    address: PLANTY_FACTORY_ADDRESS as Address,
  },
  {
    name: "PlantyToken",
    abi: plantyTokenABI,
    address: PLANTY_TOKEN_ADDRESS as Address,
  },
  {
    name: "PlantyPool",
    abi: plantyPoolABI,
    address: PLANTY_POOL_ADDRESS as Address,
  },
  {
    name: "ERC20",
    abi: erc20ABI,
  },
];

export default defineConfig({
  out: "src/generated.ts",
  contracts,
  plugins: [actions(), react()],
});
