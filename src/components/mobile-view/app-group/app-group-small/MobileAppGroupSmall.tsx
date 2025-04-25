// import React, { Component } from "react";
// import OsApp from "../OsApp/OsApp";
import "./MobileAppGroupSmall.css";
import { AppDescription } from "../../../../models/AppData";
import MobileApp from "../mobile-app/MobileApp";
import { useContext } from "react";
import MobileAppsContext from "../../../../context/MobileAppsContext";

type MobileAppGroupSmallProps = {
  name: string;
  list: AppDescription[];
  directory: string;
  state: "small" | "big";
  activeLink?: string;
};

function MobileAppGroupSmall(props: MobileAppGroupSmallProps) {
  const { name, list, state, directory } = props;

  const { setAppSize } = useContext(MobileAppsContext);

  return (
    <div className="mobileAppGroupSmall" onClick={() => setAppSize("big")}>
      <div className="mobileAppGroupSmallBackground">
        <div className="mobileAppGroupSmallContainer">
          {list.map((item, key) => {
            const { activeLink, iconImage, id } = item;

            return (
              <MobileApp
                key={key}
                id={id}
                name={name}
                activeLink={activeLink}
                imagePath={`resources/${directory}/${iconImage}`}
                state={state}
              />
            );
          })}
        </div>

        <div className="mobileAppGroupSmallTitle">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default MobileAppGroupSmall;
