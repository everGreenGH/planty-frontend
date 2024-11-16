import clsx from "clsx";
import {
  BriefcaseBusiness,
  CircleDollarSign,
  FilesIcon,
  Handshake,
  LayoutDashboardIcon,
  LayoutGrid,
  LogIn,
  LogOut,
  Settings,
  ShoppingBasket,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "~/components/atoms/Button/Button";
import { Icon20 } from "~/components/atoms/Icon/Icon20";
import { useWeb3AuthContext } from "~/contexts/Web3AuthProvider";
import PlantyLogo from "~/public/planty_logo.svg";

export const Sidebar = () => {
  const { loggedIn, login, logout, getUserName } = useWeb3AuthContext();
  const { push, pathname } = useRouter();

  const [userName, setUserName] = useState<string | undefined>(undefined);

  useEffect(() => {
    getUserName().then(setUserName);
  }, [getUserName]);

  return (
    <div className="flex w-[256px] flex-col items-start justify-between bg-theme-white px-5 py-6">
      <div className="flex h-full w-full flex-col gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
          <PlantyLogo />
          <span className="text-24/h3 text-brand-primary">PLANTY</span>
        </div>
        {/* Tabs */}
        <div className="flex w-full flex-col items-start gap-3">
          <Button
            className={clsx("w-full", pathname === "/market" ? "!bg-brand-primary text-theme-white" : "text-gray-600")}
            align="left"
            leadingIcon={<CircleDollarSign className="h-5 w-5" />}
            variant="nonOutlined"
            onClick={() => push("/market")}
          >
            Token Market
          </Button>
          <Button
            className={clsx("w-full", pathname === "/shop" ? "!bg-brand-primary text-theme-white" : "text-gray-600")}
            align="left"
            leadingIcon={<ShoppingBasket className="h-5 w-5" />}
            variant="nonOutlined"
            onClick={() => push("/shop")}
          >
            Plant Shop
          </Button>
          <Button
            className={clsx(
              "w-full",
              pathname === "/partnership" ? "!bg-brand-primary text-theme-white" : "text-gray-600",
            )}
            align="left"
            leadingIcon={<BriefcaseBusiness className="h-5 w-5" />}
            variant="nonOutlined"
            onClick={() => push("/partnership")}
          >
            Portfolio
          </Button>
          <Button
            className={clsx(
              "w-full",
              pathname === "/partnership" ? "!bg-brand-primary text-theme-white" : "text-gray-600",
            )}
            align="left"
            leadingIcon={<Settings className="h-5 w-5" />}
            variant="nonOutlined"
            onClick={() => push("/partnership")}
          >
            Settings
          </Button>
        </div>
      </div>
      {/* Connect Wallet Button */}
      {!loggedIn ? (
        <Button className="w-full" variant="primary" leadingIcon={<LogIn className="h-5 w-5" />} onClick={login}>
          Sign In
        </Button>
      ) : (
        <div className="flex w-full flex-col items-start gap-3">
          <div className="flex items-center gap-1 px-3">
            <span className="mr-2 text-16/p text-gray-600">Welcome, </span>
            <Icon20.Avatar />
            <span className="ml-1 text-16/p text-gray-950">{userName ? userName : "Anonymous"}</span>
          </div>
          <Button
            variant="nonOutlined"
            className="w-full"
            align="left"
            leadingIcon={<LogOut className="h-5 w-5" />}
            onClick={logout}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};
