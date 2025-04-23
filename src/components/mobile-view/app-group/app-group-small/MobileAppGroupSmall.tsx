// import React, { Component } from "react";
// import OsApp from "../OsApp/OsApp";
import "./MobileAppGroupSmall.css";
import { AppDescription } from "../../../../models/AppData";

type MobileAppGroupSmallProps = {
  name: string;
  list: AppDescription[];
  directory: string;
  clickCallback: () => void;
  state: string;
};

function MobileAppGroupSmall(props: MobileAppGroupSmallProps) {
  return (
    <div className="mobileAppGroupSmall" onClick={props.clickCallback}>
      <div className="mobileAppGroupSmallBackground">
        <div className="mobileAppGroupSmallContainer">
          {props.list.map((item, key) => {
            return (
              <OsApp
                key={key}
                name={item.name}
                // bgColor={item.bgColor}
                activeLink={item.activeLink}
                iconImage={item.iconImage}
                directory={props.directory}
                state={props.state}
              />
            );
          })}
        </div>

        <div className="mobileAppGroupSmallTitle">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default MobileAppGroupSmall;
