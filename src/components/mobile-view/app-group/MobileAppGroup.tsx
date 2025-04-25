import { useContext, useState } from "react";
import AppsContext from "../../../context/AppsContext";
import { AppDescription } from "../../../models/AppData";
import MobileAppGroupSmall from "./app-group-small/MobileAppGroupSmall";
import MobileAppGroupBig from "./app-group-big/MobileAppGroupBig";
import MobileAppsContext from "../../../context/MobileAppsContext";

type MobileAppGroupProps = {
  name: string;
  list: AppDescription[];
  directory: string;
  activeLink?: string;
};

type MobileAppGroupState = "small" | "big";

function MobileAppGroup(props: MobileAppGroupProps) {
  const { name, list, directory, activeLink } = props;
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
        list={list}
        name={name}
        activeLink={activeLink}
        state={state}
        directory={directory}
      />
    ) : (
      <MobileAppGroupBig
        list={list}
        name={name}
        state={state}
        directory={directory}
      />
    );

  return (
    <MobileAppsContext.Provider value={contextValue}>
      {appGroup}
    </MobileAppsContext.Provider>
  );
}

export default MobileAppGroup;
