import { IAdapter, IProvider } from "@web3auth/base";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NEXT_PUBLIC_FLOW_TESTNET_CHAIN_ID } from "~/utils/constants";
import { web3AuthOptions, web3auth } from "~/utils/web3auth.config";

type Web3AuthContextType = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  getUserName: () => Promise<string | undefined>;
};

const Web3AuthContext = createContext<Web3AuthContextType>(undefined as unknown as Web3AuthContextType);

const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = useCallback(async () => {
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      if (web3auth.connected) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getUserName = async () => {
    if (!web3auth.connected) return undefined;
    const user = await web3auth.getUserInfo();
    if (user.name) return user.name;
    return undefined;
  };

  useEffect(() => {
    const changeNetwork = async () => {
      if (!provider) return;
      const network = await provider.chainId;
      const flowTestnetId = NEXT_PUBLIC_FLOW_TESTNET_CHAIN_ID;
      if (network !== flowTestnetId) {
        await web3auth.switchChain({ chainId: flowTestnetId });
      }
    };
    changeNetwork();
  }, [provider]);

  useEffect(() => {
    const web3AuthInit = async () => {
      try {
        if (!provider) {
          await web3auth.initModal();
          setProvider(web3auth.provider);

          if (web3auth.connected) {
            setLoggedIn(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    web3AuthInit();
  }, [provider]);

  useEffect(() => {
    const configureAdapters = async () => {
      const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });

      adapters.forEach((adapter: IAdapter<unknown>) => {
        try {
          web3auth.configureAdapter(adapter);
        } catch (error) {
          console.error("Error configuring adapters: ", error);
        }
      });
    };

    if (provider) {
      configureAdapters();
    }
  }, [provider]);

  const providerValue = useMemo(
    () => ({
      loggedIn,
      login,
      logout,
      getUserName,
    }),
    [loggedIn, login, logout, getUserName],
  );

  return <Web3AuthContext.Provider value={providerValue}>{children}</Web3AuthContext.Provider>;
};

const useWeb3AuthContext = () => useContext(Web3AuthContext);

export { Web3AuthContext, Web3AuthProvider, useWeb3AuthContext };
