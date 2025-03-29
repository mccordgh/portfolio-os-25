import { createContext } from "react";

import{ AppGroup } from "../models/AppData";


export type AppsContextType = {
    apps: AppGroup[];
    selectedApp: unknown;
    setSelectedApp: (id: number, group: string) => void;
}

const AppsContext = createContext<AppsContextType>({
    apps: [],
    selectedApp: {},
    setSelectedApp: () => {},
});

export default AppsContext;
