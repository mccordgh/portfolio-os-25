import { useContext } from "react";
import { AppGroup } from "../../../../models/AppData";
import MobileApp from "../mobile-app/MobileApp";
import "./MobileAppGroupBig.css";
import MobileAppsContext from "../../../../context/MobileAppsContext";

type MobileAppGroupBigProps = {
  group: AppGroup;
  state: "small" | "big";
};

function MobileAppGroupBig(props: MobileAppGroupBigProps) {
  const { state } = props;
  const { name, list, directory } = props.group;

  const { setAppSize } = useContext(MobileAppsContext);

  return (
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
              return (
                <MobileApp
                  key={key}
                  id={key}
                  item={item}
                  directory={directory}
                  state={state}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileAppGroupBig;
