import { createContext } from "react";

import { AppDescription, AppGroup } from "../models/AppData";

type ViewMode = undefined | "desktop" | "mobile";

export type AppsContextType = {
  mode: ViewMode;
  apps: AppGroup[];
  selectedApp: AppDescription;
  setSelectedApp: (group: string, id?: number) => void;
  expandedGroupName: string;
  toggleExpansionClass: (groupName: string) => void;
};

const AppsContext = createContext<AppsContextType>({
  mode: undefined,
  apps: [],
  selectedApp: {} as AppDescription,
  setSelectedApp: () => {},
  expandedGroupName: "",
  toggleExpansionClass: () => {},
});

export default AppsContext;
export type { ViewMode };
