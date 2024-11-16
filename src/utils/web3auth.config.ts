import { CHAIN_NAMESPACES, IAdapter, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { flowTestnet, morphHolesky, rootstockTestnet } from "viem/chains";
import { CHAIN_ID } from "./constants";
import { NetworkType } from "./network";

const network: NetworkType = process.env.NEXT_PUBLIC_NETWORK_NAME as NetworkType;

const chain = {
  flow: flowTestnet,
  rootstock: rootstockTestnet,
  morph: morphHolesky,
};

const tickerName = {
  flow: "FLOW",
  rootstock: "BTC",
  morph: "ETH",
};

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: CHAIN_ID[network].toString(),
  rpcTarget: chain[network].rpcUrls.default.http[0],
  displayName: chain[network].name,
  blockExplorerUrl: chain[network].blockExplorers.default.url,
  ticker: chain[network].nativeCurrency.symbol,
  tickerName: tickerName[network],
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
