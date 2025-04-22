import { createContext } from "react";

import { AppDescription, AppGroup } from "../models/AppData";

export type AppsContextType = {
  apps: AppGroup[];
  selectedApp: AppDescription;
  setSelectedApp: (id: number, group: string) => void;
};

const AppsContext = createContext<AppsContextType>({
  apps: [],
  selectedApp: {},
  setSelectedApp: () => {},
});

export default AppsContext;
