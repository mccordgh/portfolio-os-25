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
  const [expandedGroupName, setExpandedGroupName] = useState<string>("");
  const [mode, setMode] = useState<ViewMode>(undefined);

  const setModeByClientWidth = () => {
    setMode(WindowDimensionsHelper.getModeByClientWidth());
  };

  const setSelectedAppLookup = (group: string, id?: number) => {
    const foundApp = appsRepository.findApp(group, id);
    setSelectedApp(foundApp);
  };

  useEffect(() => {
    window.addEventListener("resize", setModeByClientWidth);

    setModeByClientWidth();
  }, [mode]);

  const toggleExpansionClass = (groupName: string): void => {
    // initial setting of the expanded group
    if (expandedGroupName === "") {
      setExpandedGroupName(groupName);
      return;
    }

    if (expandedGroupName === groupName) {
      setExpandedGroupName("");
      return;
    }

    setExpandedGroupName(groupName);
  };

  const contextValue = {
    mode,
    apps,
    selectedApp,
    setSelectedApp: setSelectedAppLookup,
    expandedGroupName,
    toggleExpansionClass,
  };

  const view = mode === "desktop" ? <DesktopView /> : <MobileView />;

  return (
    <AppsContext.Provider value={contextValue}>{view}</AppsContext.Provider>
  );
}

export default Desktop;
