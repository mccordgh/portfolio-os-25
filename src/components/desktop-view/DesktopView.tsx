import { useContext } from "react";

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

  // const appGroups = (
  //     apps.map((appGroup, key) => {
  //         return (
  //             <DesktopAppGroup
  //                 key={key}
  //                 name={appGroup.name}
  //                 list={appGroup.list}
  //                 directory={appGroup.directory}
  //                 // openAppCallback={this.props.openAppCallback}
  //             />
  //         );
  //     })
  // );

  const selected = selectedApp.name ? (
    <OpenDesktopApp
      // directory={selectedApp.directory}
      app={selectedApp}
      // closeAppCallback={this.props.closeAppCallback}
    />
  ) : (
    <></>
  );

  return (
    <div className="desktop-container">
      <DesktopStatusBar />

      {apps &&
        apps.map((appGroup, key) => {
          return (
            <DesktopAppGroup
              key={key}
              name={appGroup.name}
              list={appGroup.list}
              directory={appGroup.directory}
            />
          );
        })}

      {selected}
      <Mccordinator />
    </div>
  );
}

export default DesktopView;
