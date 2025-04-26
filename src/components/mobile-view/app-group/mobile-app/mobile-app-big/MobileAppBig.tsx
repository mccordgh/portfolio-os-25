import { useContext } from "react";

import "./MobileAppBig.css";
import AppsContext from "../../../../../context/AppsContext";
import { AppDescription } from "../../../../../models/AppData";
import ImageHelper from "../../../../../helpers/ImageHelper";

type MobileAppBigProps = {
  id: number;
  directory: string;
  item: AppDescription;
};

function MobileAppBig(props: MobileAppBigProps) {
  const { directory, id, item } = props;
  const { iconImage, activeLink, name } = item;

  const { setSelectedApp } = useContext(AppsContext);
  const mobileOsAppBigStyleObject = {
    backgroundImage: `url(${ImageHelper.getImagePath(directory, iconImage || "")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const clickHandler = () => {
    if (activeLink) {
      window.open(activeLink, "_blank");

      return;
    }

    setSelectedApp(directory, id);
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
