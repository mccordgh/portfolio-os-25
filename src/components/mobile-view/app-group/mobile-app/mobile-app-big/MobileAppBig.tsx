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

  const mobileAppBigStyleObject = {
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
    <div className="mobileAppGroupBig">
      <div
        className="mobileAppGroupBigBackground"
        style={mobileAppBigStyleObject}
        onClick={() => {
          clickHandler();
        }}
      >
        <div className="mobileAppGroupBigContainer"></div>
      </div>

      <div className="mobileAppGroupBigTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default MobileAppBig;
