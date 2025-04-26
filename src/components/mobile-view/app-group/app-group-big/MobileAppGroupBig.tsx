import { useContext } from "react";
import { AppGroup } from "../../../../models/AppData";
import MobileApp from "../mobile-app/MobileApp";
import "./MobileAppGroupBig.css";
import MobileAppsContext from "../../../../context/MobileAppsContext";

type MobileAppGroupBigProps = {
  group: AppGroup;
  // name: string;
  // list: AppDescription[];
  // directory: string;
  state: "small" | "big";
};

function MobileAppGroupBig(props: MobileAppGroupBigProps) {
  const { state } = props;
  const { name, list, directory } = props.group;

  const { setAppSize } = useContext(MobileAppsContext);

  return (
    // <div className="appGroupSmallPlaceholder">
    <>
      <div
        className="MobileOsAppGroupDimBehind"
        onClick={() => {
          setAppSize("small");
        }}
      ></div>

      <div className="mobileAppGroupBig">
        <div className="mobileAppGroupBigTitle">
          <h1>{name}</h1>
        </div>

        <div className="mobileAppGroupBigBackground">
          <div className="mobileAppGroupBigContainer">
            {list.map((item, key) => {
              // const { name: itemName, activeLink, iconImage } = item;
              return (
                <MobileApp
                  key={key}
                  id={key}
                  item={item}
                  directory={directory}
                  // name={itemName}
                  // activeLink={activeLink}
                  // imagePath={`resources/${directory}/${iconImage}`}
                  state={state}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
    // </div>
  );
}

export default MobileAppGroupBig;
