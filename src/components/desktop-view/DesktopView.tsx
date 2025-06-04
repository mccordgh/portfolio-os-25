import { useContext } from "react";

import AppsContext from "../../context/AppsContext";

import DesktopAppGroup from "./app-group/DesktopAppGroup";
import DesktopStatusBar from "./status-bar/DesktopStatusBar";
import OpenDesktopApp from "./open-app/OpenDesktopApp";
import Mccordinator from "../mccordinator/Mccordinator";

import "./DesktopView.css";

function DesktopView() {
  const { apps, selectedApp, expandedGroupName, toggleExpansionClass } =
    useContext(AppsContext);

  const selected =
    selectedApp.name && selectedApp.name !== "placeholder" ? (
      <OpenDesktopApp />
    ) : (
      <></>
    );

  return (
    <>
      <DesktopStatusBar />

      <div className="desktop-container">
        <div className="floating-wall"></div>
        {apps &&
          apps.map((appGroup, index) => {
            return (
              <DesktopAppGroup
                expanded={expandedGroupName === appGroup.name}
                toggleExpansionClass={() => {
                  toggleExpansionClass(appGroup.name);
                }}
                key={index}
                index={index}
                group={appGroup}
              />
            );
          })}

        {selected}

        <Mccordinator />
      </div>
    </>
  );
}

export default DesktopView;
