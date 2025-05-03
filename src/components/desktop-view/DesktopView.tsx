import { useContext, useState } from "react";

// import DesktopAppGroup from './DesktopAppGroup/DesktopAppGroup';
// import DesktopStatusBar from './DesktopStatusBar/DesktopStatusBar';
// import Mccordinator from '../Mccordinator/Mccordinator';
// import OpenDesktopAppWindow from './OpenDesktopAppWindow/OpenDesktopAppWindow';

import "./DesktopView.css";
import AppsContext from "../../context/AppsContext";
import DesktopAppGroup from "./app-group/DesktopAppGroup";
import DesktopStatusBar from "./status-bar/DesktopStatusBar";
import OpenDesktopApp from "./open-app/OpenDesktopApp";
import Mccordinator from "../mccordinator/Mccordinator";

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
    // const expandedClass = expanded ? "expanded" : "";

    // setWrapperClass(expandedClass);
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
                // name={appGroup.name}
                // list={appGroup.list}
                // directory={appGroup.directory}
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
