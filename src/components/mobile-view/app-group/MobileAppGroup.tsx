import { useContext, useState } from "react";
import AppsContext from "../../../context/AppsContext";
import { AppGroup } from "../../../models/AppData";
import MobileAppGroupSmall from "./app-group-small/MobileAppGroupSmall";
import MobileAppGroupBig from "./app-group-big/MobileAppGroupBig";
import MobileAppsContext from "../../../context/MobileAppsContext";

type MobileAppGroupProps = {
  group: AppGroup;
};

type MobileAppGroupState = "small" | "big";

function MobileAppGroup(props: MobileAppGroupProps) {
  const { group } = props;
  const { setSelectedApp } = useContext(AppsContext);

  const [state, setState] = useState<MobileAppGroupState>("small");

  const contextValue = {
    openMobileApp(group: string, id?: number) {
      this.setAppSize("small");

      setSelectedApp(group, id);
    },
    setAppSize(size: "small" | "big") {
      setState(size);
    },
  };

  const appGroup =
    state === "small" ? (
      <MobileAppGroupSmall
        group={group}
        // list={list}
        // name={name}
        state={state}
        // directory={directory}
      />
    ) : (
      <MobileAppGroupBig
        group={group}
        // list={list}
        // name={name}
        state={state}
        // directory={directory}
      />
    );

  return (
    <MobileAppsContext.Provider value={contextValue}>
      {appGroup}
    </MobileAppsContext.Provider>
  );
}

export default MobileAppGroup;
