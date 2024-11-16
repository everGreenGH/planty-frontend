import { ContractConfig, defineConfig } from "@wagmi/cli";
import { actions, react } from "@wagmi/cli/plugins";
import { PLANTY_FACTORY_ADDRESS, PLANTY_TOKEN_ADDRESS } from "~/utils/constants";
import { erc20ABI, plantyFactoryABI, plantyPoolABI, plantyTokenABI } from "./src/contract";

const contracts: ContractConfig[] = [
  {
    name: "PlantyFactory",
    abi: plantyFactoryABI,
    address: PLANTY_FACTORY_ADDRESS,
  },
  {
    name: "PlantyToken",
    abi: plantyTokenABI,
    address: PLANTY_TOKEN_ADDRESS,
  },
  {
    name: "PlantyPool",
    abi: plantyPoolABI,
    address: "0x8a17fe5FEdDD013A542E6C1364278fe277347Fbd",
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
