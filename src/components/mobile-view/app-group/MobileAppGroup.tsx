import { useContext, useState } from "react";
// import AppGroupSmall from "./AppGroupSmall/AppGroupSmall";
// import AppGroupBig from "./AppGroupBig/AppGroupBig";
import AppsContext from "../../../context/AppsContext";
import { AppDescription } from "../../../models/AppData";

type MobileAppGroupProps = {
  name: string;
  list: AppDescription[];
  directory: string;
};

function MobileAppGroup(props: MobileAppGroupProps) {
  const { setSelectedApp } = useContext(AppsContext);

  const [state, setState] = useState("small");

  // const makeGroupBig = () => {
  //   setState("big");
  // };

  const makeGroupSmall = () => {
    setState("small");
  };

  const openApp = (group: string, id?: number) => {
    makeGroupSmall();

    setSelectedApp(group, id);
  };

  return state === "small" ? (
    <AppGroupSmall
      list={props.list}
      name={props.name}
      activeLink={props.activeLink}
      clickCallback={makeGroupBig}
      state={state.state}
      directory={props.directory}
    />
  ) : (
    <AppGroupBig
      list={props.list}
      name={props.name}
      state={state.state}
      directory={props.directory}
      openAppCallback={openApp}
      makeGroupSmall={makeGroupSmall}
    />
  );
}

export default MobileAppGroup;
