import DesktopApp from "./app/DesktopApp";

import { AppGroup } from "../../../models/AppData";

import "./DesktopAppGroup.css";

type DesktopAppGroupProps = {
  group: AppGroup;
  expanded: boolean;
  toggleExpansionClass: () => void;
  index: number;
};

function DesktopAppGroup(props: DesktopAppGroupProps) {
  const { group, expanded, toggleExpansionClass, index } = props;
  const { name, list, directory } = group;

  const appWrapperExtraStyles = index === 0 ? {} : { top: `-${index * 6}rem` };
  console.log(name, appWrapperExtraStyles);

  return (
    <div className={`desktopAppGroupWrapper ${expanded ? "expanded" : ""}`}>
      <div className="desktopGroupFolder" onClick={toggleExpansionClass}>
        <div className="desktopGroupFolder_back"></div>

        <div className="desktopGroupFolder_front">
          <h1 className="desktopGroupTitle no-select">{name}</h1>
        </div>
      </div>

      <div
        className="desktopAppWrapper"
        style={expanded ? appWrapperExtraStyles : {}}
      >
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
