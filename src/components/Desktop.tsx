import { useEffect, useRef, useState } from "react";

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

  const lastTabbedToElement = useRef<HTMLAnchorElement>(null);
  const savedTabbedElement = useRef<HTMLAnchorElement>(null);

  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab") {
      lastTabbedToElement.current = event.target as HTMLAnchorElement;
    }
  };

  const setModeByClientWidth = () => {
    setMode(WindowDimensionsHelper.getModeByClientWidth());
  };

  const setSelectedAppLookup = (group: string, id?: number) => {
    // If an id exists then we want to save the last tabbed to desktop icon so we can focus it after closing the opened app.
    if (id || group === "about") {
      savedTabbedElement.current = lastTabbedToElement.current;
    }

    // If the group is "closeApp" (close button clicked on open app) then we want to focus the last saved tabbed to element aka desktop icon.
    if (group === "closeApp" && lastTabbedToElement?.current) {
      savedTabbedElement.current?.focus();
    }

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
    <AppsContext.Provider value={contextValue}>
      <div
        role="region"
        className="App"
        aria-labelledby="portfolio-title"
        onKeyUp={onKeyUpHandler}
      >
        {view}
      </div>
    </AppsContext.Provider>
  );
}

export default Desktop;
