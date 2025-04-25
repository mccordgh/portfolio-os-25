import { useContext } from "react";
import { AppDescription } from "../../../../models/AppData";
import MobileApp from "../mobile-app/MobileApp";
import "./MobileAppGroupBig.css";
import MobileAppsContext from "../../../../context/MobileAppsContext";

type MobileAppGroupBigProps = {
  name: string;
  list: AppDescription[];
  directory: string;
  state: "small" | "big";
};

function MobileAppGroupBig(props: MobileAppGroupBigProps) {
  const { name, list, state } = props;

  const { setAppSize } = useContext(MobileAppsContext);

  return (
    <div className="appGroupSmallPlaceholder">
      <div
        className="osAppGroupDimBehind"
        onClick={() => {
          setAppSize("small");
        }}
      ></div>

      <div className="appGroupBig">
        <div className="appGroupBigTitle">
          <h1>{name}</h1>
        </div>

        <div className="appGroupBigBackground">
          <div className="appGroupBigContainer">
            {list.map((item, key) => {
              const { name: itemName, activeLink, directory, iconImage } = item;
              return (
                <MobileApp
                  key={key}
                  id={key}
                  name={itemName}
                  activeLink={activeLink}
                  imagePath={`resources/${directory}/${iconImage}`}
                  state={state}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppGroupBig;
