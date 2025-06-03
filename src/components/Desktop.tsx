import { useEffect, useState } from "react";

import DesktopView from "./desktop-view/DesktopView";
import MobileView from "./mobile-view/MobileView";

import AppsContext, { ViewMode } from "../context/AppsContext";
import { AppDescription, AppGroup } from "../models/AppData";

import WindowDimensionsHelper from "../helpers/WindowDimensionsHelper";
import AppsRepository from "../repositories/AppsRepository";

const appsRepository = new AppsRepository();

function Desktop() {
  const apps: AppGroup[] = appsRepository.getApps();
  const [selectedApp, setSelectedApp] = useState({} as AppDescription);
  const [mode, setMode] = useState<ViewMode>(undefined);

  const setModeByClientWidth = () => {
    setMode(WindowDimensionsHelper.getModeByClientWidth());
  };

  const setSelectedAppLookup = (group: string, id?: number) => {
    setSelectedApp(appsRepository.setSelectedAppLookup(group, id));
  };

  useEffect(() => {
    window.addEventListener("resize", setModeByClientWidth);

    setModeByClientWidth();
  }, [mode]);

  const contextValue = {
    mode,
    apps,
    selectedApp,
    setSelectedApp: setSelectedAppLookup,
  };

  const view = mode === "desktop" ? <DesktopView /> : <MobileView />;

  return (
    <AppsContext.Provider value={contextValue}>{view}</AppsContext.Provider>
  );
}

export default Desktop;
