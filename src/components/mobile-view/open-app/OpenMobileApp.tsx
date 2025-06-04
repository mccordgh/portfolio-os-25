import { useContext, useRef } from "react";
import { AppDescription } from "../../../models/AppData";
import "./OpenMobileApp.css";
import AppsContext from "../../../context/AppsContext";
import CloseButton from "../../buttons/CloseButton";
import AnimationsHelper from "../../../helpers/AnimationsHelper";
import AppAboutPage from "../../content/AppAboutPage";

type OpenMobileAppProps = {
  app: AppDescription;
};

function OpenMobileApp(props: OpenMobileAppProps) {
  const { setSelectedApp } = useContext(AppsContext);

  const openAppRef = useRef<HTMLDivElement>(null);

  const { app } = props;
  const { name } = app;

  const closeApp = () => {
    AnimationsHelper.removeAnimationFromElement(openAppRef.current, "fadeIn");

    AnimationsHelper.applyAnimationToElement(
      openAppRef.current,
      "fadeOut",
      400,
      () => {
        setSelectedApp("closeApp");
      }
    );
  };

  return (
    <div className="openApp fade-in-element" ref={openAppRef}>
      <div className="appImageTitle">
        <span>{name}</span>

        <CloseButton view="mobile" onClickCallback={closeApp} />
      </div>

      <AppAboutPage />
    </div>
  );
}

export default OpenMobileApp;
