import { createContext } from "react";

import { AppDescription, AppGroup } from "../models/AppData";

export type AppsContextType = {
  apps: AppGroup[];
  selectedApp: AppDescription;
  setSelectedApp: (group: string, id?: number) => void;
};

const AppsContext = createContext<AppsContextType>({
  apps: [],
  selectedApp: { name: "placeholder" },
  setSelectedApp: () => {},
});

export default AppsContext;
