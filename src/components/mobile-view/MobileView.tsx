import { useContext } from "react";
// import OpenAppWindow from "../OpenAppWindow/OpenAppWindow";

import AppsContext from "../../context/AppsContext";
import Banner from "./banner/Banner";
import MobileAppGroup from "./app-group/MobileAppGroup";

import "./MobileView.css";
import OpenMobileApp from "./open-app/OpenMobileApp";

function MobileView() {
  const { apps, selectedApp } = useContext(AppsContext);

  console.log(
    "app selected?:",
    selectedApp.name && selectedApp.name !== "placeholder"
  );
  return (
    <>
      <Banner />

      <div className="mobileContainer">
        <div className="appgroupContainer">
          {apps.map((appGroup, key) => {
            return (
              <MobileAppGroup
                key={key}
                name={appGroup.name}
                list={appGroup.list}
                directory={appGroup.directory}
              />
            );
          })}
        </div>

        {/* <div className="mobileImage">
          <img
            src="resources/mccordinator2_head.png"
            alt="Mccordinator's Pixel Head"
          />
        </div> */}

        {/* <h1>{selectedApp.name}</h1> */}
        {selectedApp.name && selectedApp.name !== "placeholder" && (
          <OpenMobileApp app={selectedApp} />
        )}
      </div>
    </>
  );
}

export default MobileView;
