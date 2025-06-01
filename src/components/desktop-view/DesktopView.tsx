import { useContext, useState } from "react";

import AppsContext from "../../context/AppsContext";

import DesktopAppGroup from "./app-group/DesktopAppGroup";
import DesktopStatusBar from "./status-bar/DesktopStatusBar";
import OpenDesktopApp from "./open-app/OpenDesktopApp";
import Mccordinator from "../mccordinator/Mccordinator";

import "./DesktopView.css";

function DesktopView() {
  const { apps, selectedApp } = useContext(AppsContext);
  const [expandedGroupName, setExpandedGroupName] = useState("");

  const selected =
    selectedApp.name && selectedApp.name !== "placeholder" ? (
      <OpenDesktopApp app={selectedApp} />
    ) : (
      <></>
    );

  const toggleExpansionClass = (groupName: string) => {
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
