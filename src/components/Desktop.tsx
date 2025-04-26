import { useEffect, useState } from "react";
// import MobileView from './MobileView/MobileView';

import DesktopView from "./desktop-view/DesktopView";

import portfolioAbout from "../data/portfolio_about.json";

// import headIcon from '../res/mccordinator2_head.png';
import AppsContext from "../context/AppsContext";
import { AppDescription, AppGroup } from "../models/AppData";

import appsList from "../data/apps.json";
import MobileView from "./mobile-view/MobileView";

const IPAD_PRO_WIDTH = 1024;

function Desktop() {
  const apps: AppGroup[] = appsList.data;
  // const [apps, setApps] = useState<AppGroup[]>(appsList.data);
  const [selectedApp, setSelectedApp] = useState({ name: "placeholder" });
  const [mode, setMode] = useState("");

  const setModeByClientWidth = () => {
    const mode = window.innerWidth > IPAD_PRO_WIDTH ? "desktop" : "mobile";

    setMode(mode);
  };

  const findAppByIdAndGroup = (groupName: string, id: number) => {
    const group = apps.find((app) => app.name === groupName);
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
      setSelectedApp({ name: "placeholder" });
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
    apps,
    selectedApp,
    setSelectedApp: setSelectedAppLookup,
  };

  const view = mode === "desktop" ? <DesktopView /> : <MobileView />;

  if (mode === "") {
    return <></>;
  }

  return (
    <AppsContext.Provider value={contextValue}>{view}</AppsContext.Provider>
  );
}

export default Desktop;
