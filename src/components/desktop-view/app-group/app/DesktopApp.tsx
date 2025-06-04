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
  const groupTitleRef = useRef<HTMLHeadingElement>(null);

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
    <a href="#" onClick={onAppClick}>
      <div className="desktopApp" ref={parentRef}>
        <div
          className="desktopAppBackground"
          style={desktopAppStyleObject}
        ></div>

        <div className="desktopAppTitle">
          <h2 ref={groupTitleRef}>{name}</h2>
        </div>
      </div>
    </a>
  );
}

export default DesktopApp;
