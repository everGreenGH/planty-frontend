import { LIT_RPC, LitNetwork } from "@lit-protocol/constants";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import * as ethers from "ethers";

export const litNodeClient = new LitNodeClient({
  litNetwork: LitNetwork.DatilDev,
  debug: false,
});

litNodeClient.connect();

export const ethersWallet = new ethers.Wallet(
  process.env.ETHEREUM_PRIVATE_KEY as string,
  new ethers.providers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE),
);
