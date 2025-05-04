import { useContext } from "react";
import AppsContext from "../../../../context/AppsContext";

import "./DesktopApp.css";
import { AppDescription } from "../../../../models/AppData";
import ImageHelper from "../../../../helpers/ImageHelper";

type DesktopAppProps = {
  id: number;
  directory: string;
  item: AppDescription;
  // iconImagePath: string;
  // activeLink?: string;
  // name?: string;
};

function DesktopApp(props: DesktopAppProps) {
  const { id, directory, item } = props;
  const { iconImage, activeLink, name } = item;

  const { setSelectedApp } = useContext(AppsContext);

  const desktopAppStyleObject = {
    // backgroundImage: `url(${this.props.iconImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
    backgroundImage: `url(${ImageHelper.getImagePath(directory, iconImage || "")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const onAppClick = () => {
    if (activeLink) {
      window.open(activeLink, "_blank");

      return;
    }

    setSelectedApp(directory, id);
    // this.props.openAppCallback(this.props.id, this.props.group);
  };

  return (
    <div className="desktopApp" onClick={onAppClick}>
      <div className="desktopAppBackground" style={desktopAppStyleObject}></div>

      <div className="desktopAppTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default DesktopApp;
