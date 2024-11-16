import { CHAIN_NAMESPACES, IAdapter, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { flowTestnet } from "viem/chains";
import { NEXT_PUBLIC_FLOW_TESTNET_CHAIN_ID } from "./constants";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: NEXT_PUBLIC_FLOW_TESTNET_CHAIN_ID,
  rpcTarget: flowTestnet.rpcUrls.default.http[0],
  displayName: flowTestnet.name,
  blockExplorerUrl: flowTestnet.blockExplorers.default.url,
  ticker: flowTestnet.nativeCurrency.symbol,
  tickerName: "FLOW",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

export const web3AuthOptions: Web3AuthOptions = {
  clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID ?? "",
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
};

export const web3auth = new Web3Auth(web3AuthOptions);

const metamaskAdapter = new MetamaskAdapter({
  ...web3AuthOptions,
});

web3auth.configureAdapter(metamaskAdapter);
