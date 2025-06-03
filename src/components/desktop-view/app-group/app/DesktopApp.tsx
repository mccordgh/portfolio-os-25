import { useContext, useRef } from "react";

import AppsContext from "../../../../context/AppsContext";
import { AppDescription } from "../../../../models/AppData";
import ImageHelper from "../../../../helpers/ImageHelper";

import "./DesktopApp.css";
import AnimationsHelper from "../../../../helpers/AnimationsHelper";

type DesktopAppProps = {
  id: number;
  directory: string;
  item: AppDescription;
};

function DesktopApp(props: DesktopAppProps) {
  const { id, directory, item } = props;
  const { iconImage, activeLink, name } = item;

  const { setSelectedApp } = useContext(AppsContext);

  const parentRef = useRef<HTMLDivElement>(null);

  const desktopAppStyleObject = {
    backgroundImage: `url(${ImageHelper.getImagePath(directory, iconImage || "")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const onAppClick = () => {
    AnimationsHelper.applyAnimationToElement(
      parentRef.current,
      "bounce",
      600,
      () => {
        if (activeLink) {
          window.open(activeLink, "_blank");

          return;
        }

        setSelectedApp(directory, id);
      }
    );
  };

  return (
    <div className="desktopApp" onClick={onAppClick} ref={parentRef}>
      <div className="desktopAppBackground" style={desktopAppStyleObject}></div>

      <div className="desktopAppTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default DesktopApp;
