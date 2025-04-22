import { useState } from "react";

import DesktopApp from "./app/DesktopApp";

import { AppDescription } from "../../../models/AppData";

import "./DesktopAppGroup.css";

type DesktopAppGroupProps = {
  name: string;
  list: AppDescription[];
  directory: string;
};

function DesktopAppGroup(props: DesktopAppGroupProps) {
  const [wrapperClass, setWrapperClass] = useState("");

  const { name, list, directory } = props;

  const toggleExpansionClasses = () => {
    const expandedClass = wrapperClass === "expanded" ? "" : "expanded";

    setWrapperClass(expandedClass);
  };

  return (
    <div className={`desktopAppGroupWrapper ${wrapperClass}`}>
      <div className="desktopGroupFolder" onClick={toggleExpansionClasses}>
        <div className="desktopGroupFolder_back"></div>

        <div className="desktopGroupFolder_front">
          <h1 className="desktopGroupTitle no-select">{name}</h1>
        </div>
      </div>

      <div className="desktopAppWrapper">
        {list.map((item, key) => {
          return (
            <DesktopApp
              key={key}
              activeLink={item.activeLink}
              iconImagePath={`resources/${directory}/${item.iconImage}`}
              group={name}
              id={key}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DesktopAppGroup;
