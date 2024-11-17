import { LIT_RPC, LitNetwork } from "@lit-protocol/constants";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import * as ethers from "ethers";

export const litNodeClient = new LitNodeClient({
  litNetwork: LitNetwork.DatilDev,
  debug: false,
});

litNodeClient.connect();

export const ethersWallet = new ethers.Wallet(
  "0x68ac28ca31361f4978b2d45b2dd8378d2845ee8d9afce4c7a068bdd2f7fb7113" as string,
  new ethers.providers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE),
);
