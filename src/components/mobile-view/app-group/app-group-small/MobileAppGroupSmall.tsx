import "./MobileAppGroupSmall.css";
import { AppGroup } from "../../../../models/AppData";
import MobileApp from "../mobile-app/MobileApp";
import { useContext } from "react";
import MobileAppsContext from "../../../../context/MobileAppsContext";

type MobileAppGroupSmallProps = {
  group: AppGroup;
  state: "small" | "big";
};

function MobileAppGroupSmall(props: MobileAppGroupSmallProps) {
  const { state } = props;
  const { name, list, directory } = props.group;

  const { setAppSize } = useContext(MobileAppsContext);

  return (
    <div className="mobileAppGroupSmall" onClick={() => setAppSize("big")}>
      <div className="mobileAppGroupSmallBackground">
        <div className="mobileAppGroupSmallContainer">
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

        <div className="mobileAppGroupSmallTitle">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default MobileAppGroupSmall;
