import DesktopApp from "./app/DesktopApp";

import { AppGroup } from "../../../models/AppData";

import "./DesktopAppGroup.css";
import { useRef } from "react";

type DesktopAppGroupProps = {
  group: AppGroup;
  expanded: boolean;
  toggleExpansionClass: () => void;
  index: number;
};

function DesktopAppGroup(props: DesktopAppGroupProps) {
  const { group, expanded, toggleExpansionClass } = props;
  const { name, list, directory } = group;

  const groupTitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={`desktopAppGroupWrapper ${expanded ? "expanded" : ""}`}>
      <div className="desktopGroupFolder">
        <a
          className="desktopGroupFolderLink"
          href="#"
          onClick={toggleExpansionClass}
        >
          <div className="desktopGroupFolder_back"></div>

          <div className="desktopGroupFolder_front">
            <h1 className="desktopGroupTitle" ref={groupTitleRef}>
              {name}
            </h1>
          </div>
        </a>
      </div>

      <div className="desktopAppWrapper">
        {list.map((item, key) => {
          return (
            <DesktopApp key={key} item={item} directory={directory} id={key} />
          );
        })}
      </div>
    </div>
  );
}

export default DesktopAppGroup;
