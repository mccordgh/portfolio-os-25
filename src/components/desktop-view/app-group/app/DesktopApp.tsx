import { useContext } from "react";
import AppsContext from "../../../../context/AppsContext";

import "./DesktopApp.css";

type DesktopAppProps = {
  id: number;
  group: string;
  iconImagePath: string;
  activeLink?: string;
  name?: string;
};

function DesktopApp(props: DesktopAppProps) {
  const { id, group, iconImagePath, activeLink, name } = props;
  const { setSelectedApp } = useContext(AppsContext);

  const desktopAppStyleObject = {
    // backgroundImage: `url(${this.props.iconImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
    backgroundImage: `url(${iconImagePath})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const onAppClick = () => {
    if (activeLink) {
      window.open(activeLink, "_blank");

      return;
    }

    setSelectedApp(id, group);
    // this.props.openAppCallback(this.props.id, this.props.group);
  };

  return (
    <div className="desktopApp">
      <div
        className="desktopAppBackground"
        style={desktopAppStyleObject}
        onClick={onAppClick}
      ></div>

      <div className="desktopAppTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default DesktopApp;
