import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider, createConfig, http } from "wagmi";
import { flowTestnet } from "wagmi/chains";
import { ModalProvider } from "~/contexts/ModalProvider";
import { Web3AuthProvider } from "~/contexts/Web3AuthProvider";
import "../styles/globals.css";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [flowTestnet],
  transports: {
    [flowTestnet.id]: http(),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <Web3AuthProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </Web3AuthProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
