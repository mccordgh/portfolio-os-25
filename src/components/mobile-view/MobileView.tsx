import { useContext } from "react";

import AppsContext from "../../context/AppsContext";
import Banner from "./banner/Banner";
import MobileAppGroup from "./app-group/MobileAppGroup";

import "./MobileView.css";
import OpenMobileApp from "./open-app/OpenMobileApp";

function MobileView() {
  const { apps, selectedApp } = useContext(AppsContext);

  return (
    <>
      <Banner />

      <div className="mobileContainer">
        <div
          className="appgroupContainer"
          style={{ backgroundImage: 'url("resources/mccordinator2_head.png")' }}
        >
          {apps.map((appGroup, key) => {
            return <MobileAppGroup key={key} group={appGroup} />;
          })}
        </div>

        {selectedApp.name && selectedApp.name !== "placeholder" && (
          <OpenMobileApp app={selectedApp} />
        )}
      </div>
    </>
  );
}

export default MobileView;
