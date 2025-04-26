import { useContext } from "react";

import "./MobileAppBig.css";
import AppsContext from "../../../../../context/AppsContext";

type MobileAppBigProps = {
  iconImage: string;
  activeLink?: string;
  name: string;
  id?: number;
};

function MobileAppBig(props: MobileAppBigProps) {
  const { iconImage, activeLink, name, id } = props;

  const { setSelectedApp } = useContext(AppsContext);

  const mobileOsAppBigStyleObject = {
    backgroundImage: `url(${iconImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const clickHandler = () => {
    if (activeLink) {
      window.open(activeLink, "_blank");

      return;
    }

    setSelectedApp(name, id);
  };

  return (
    <div className="mobileOsAppGroupBig">
      <div
        className="mobileOsAppGroupBigBackground"
        style={mobileOsAppBigStyleObject}
        onClick={() => {
          clickHandler();
        }}
      >
        <div className="mobileOsAppGroupBigContainer"></div>
      </div>

      <div className="mobileOsAppGroupBigTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default MobileAppBig;
