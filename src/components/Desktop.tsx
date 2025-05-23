import { useEffect, useState } from "react";
// import MobileView from './MobileView/MobileView';

import DesktopView from "./desktop-view/DesktopView";

import portfolioAbout from "../data/portfolio_about.json";

// import headIcon from '../res/mccordinator2_head.png';
import AppsContext, { ViewMode } from "../context/AppsContext";
import { AppDescription, AppGroup } from "../models/AppData";

import appsList from "../data/apps.json";
import MobileView from "./mobile-view/MobileView";

const IPAD_PRO_WIDTH = 1024;

function Desktop() {
  const apps: AppGroup[] = appsList.data as AppGroup[];
  const [selectedApp, setSelectedApp] = useState({} as AppDescription);
  const [mode, setMode] = useState<ViewMode>(undefined);

  const setModeByClientWidth = () => {
    const mode = window.innerWidth > IPAD_PRO_WIDTH ? "desktop" : "mobile";

    setMode(mode);
  };

  const findAppByIdAndGroup = (directory: string, id: number) => {
    const group = apps.find((app) => app.directory === directory);
    const appToOpen = group?.list[id];

    if (appToOpen) {
      appToOpen.directory = group.directory;
    }

    return appToOpen;
  };

  const setSelectedAppLookup = (group: string, id?: number) => {
    if (group === "about") {
      setSelectedApp(portfolioAbout as AppDescription);
      return;
    }

    if (group === "closeApp") {
      setSelectedApp({} as AppDescription);
      return;
    }

    if (id === undefined) {
      console.error("Cannot find app when id is undefined");
      return;
    }

    const found = findAppByIdAndGroup(group, id);

    if (found) {
      setSelectedApp(found);
    } else {
      console.error(`App with id ${id} not found in group ${group}`);
    }
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

  if (!mode) {
    return <></>;
  }

  return (
    <AppsContext.Provider value={contextValue}>{view}</AppsContext.Provider>
  );
}

export default Desktop;
