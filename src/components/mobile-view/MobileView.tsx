import { useContext } from "react";
// import Banner from "./Banner/Banner";
// import AppGroup from "./AppGroup/AppGroup";
// import OpenAppWindow from "../OpenAppWindow/OpenAppWindow";

import AppsContext from "../../context/AppsContext";

function MobileView() {
  const { apps, selectedApp } = useContext(AppsContext);

  return (
    <div className="mobileContainer">
      {/* <Banner /> */}

      <div className="appgroupContainer">
        {apps.map((appGroup, key) => {
          return (
            <h1>
              {appGroup.name} {key}
            </h1>
            // <AppGroup
            //   key={key}
            //   name={appGroup.name}
            //   list={appGroup.list}
            //   directory={`resources/${appGroup.directory}`}
            // />
          );
        })}
      </div>

      <div className="osImage">
        <img
          src="resources/mccordinator2_head.png"
          alt="Mccordinator's Pixel Head"
        />
      </div>

      <h1>{selectedApp.name}</h1>
      {/* {selectedApp.name && <OpenAppWindow app={selectedApp} />} */}
    </div>
  );
}

export default MobileView;
