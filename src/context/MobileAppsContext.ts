import { createContext } from "react";

export type MobileAppsContextType = {
  openMobileApp: (group: string, id?: number) => void;
  setAppSize: (size: "small" | "big") => void;
};

const MobileAppsContext = createContext<MobileAppsContextType>({
  openMobileApp: () => {},
  setAppSize: () => {},
});

export default MobileAppsContext;
