import DesktopApp from "./app/DesktopApp";

import { AppGroup } from "../../../models/AppData";

import "./DesktopAppGroup.css";

type DesktopAppGroupProps = {
  // name: string;
  // list: AppDescription[];
  // directory: string;
  group: AppGroup;
  expanded: boolean;
  toggleExpansionClass: () => void;
};

function DesktopAppGroup(props: DesktopAppGroupProps) {
  const { group, expanded, toggleExpansionClass } = props;
  const { name, list, directory } = group;

  return (
    <div className={`desktopAppGroupWrapper ${expanded ? "expanded" : ""}`}>
      <div className="desktopGroupFolder" onClick={toggleExpansionClass}>
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
              item={item}
              // activeLink={item.activeLink}
              // iconImagePath={`resources/${directory}/${item.iconImage}`}
              directory={directory}
              id={key}
              // name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DesktopAppGroup;
