import { useContext, useEffect, useRef } from "react";

import AppsContext from "../../../context/AppsContext";

import "./OpenDesktopApp.css";
import CloseButton from "../../buttons/CloseButton";
import AnimationsHelper from "../../../helpers/AnimationsHelper";
import AppAboutPage from "../../content/AppAboutPage";

function OpenDesktopApp() {
  const { selectedApp, setSelectedApp } = useContext(AppsContext);
  const { name } = selectedApp;

  const openAppRef = useRef<HTMLDivElement>(null);
  const openAppBehindRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLAnchorElement>(null);
  const lastFocusRef = useRef<HTMLButtonElement>(null);

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

    AnimationsHelper.applyAnimationToElement(
      openAppBehindRef.current,
      "fadeOut"
    );
  };

  useEffect(() => {
    setTimeout(() => {
      openAppRef.current?.focus();
    }, 100);
  }, []);

  const onBlurHandler = (event: React.FocusEvent<HTMLDivElement>) => {
    // if blur triggers while main modal parent is focused, move to first active button
    if (event.target == openAppRef.current) {
      firstFocusRef.current?.focus();
    }
  };

  return (
    <>
      <div
        className="desktop-app_behind"
        ref={openAppBehindRef}
        onClick={closeApp}
      />
      <div
        className="desktop-app_open fade-in-element"
        ref={openAppRef}
        onBlur={onBlurHandler}
        tabIndex={999}
      >
        <div className="app_open-banner">
          <span className="windowTitle">{name}</span>
          <CloseButton
            ref={lastFocusRef}
            view="desktop"
            onClickCallback={closeApp}
          />
        </div>

        <AppAboutPage
          firstFocusRef={firstFocusRef}
          lastFocusRef={lastFocusRef}
        />
      </div>
    </>
  );
}

export default OpenDesktopApp;
