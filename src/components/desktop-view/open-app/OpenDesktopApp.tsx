import { useContext, useRef } from "react";
import { AppDescription } from "../../../models/AppData";

import AppsContext from "../../../context/AppsContext";

import "./OpenDesktopApp.css";
import CloseButton from "../../buttons/CloseButton";
import AnimationsHelper from "../../../helpers/AnimationsHelper";

type OpenDesktopAppProps = {
  app: AppDescription;
};

function OpenDesktopApp(props: OpenDesktopAppProps) {
  const { app } = props;
  const { headerImage, iconImage, directory } = app;

  const { setSelectedApp } = useContext(AppsContext);

  const openAppRef = useRef<HTMLDivElement>(null);
  const openAppBehindRef = useRef<HTMLDivElement>(null);

  const headerImagePath = `resources/${directory}/${headerImage}`;
  const iconImagePath = `resources/${directory}/${iconImage}`;

  const links = app?.links?.length ? (
    <ul>
      {app.links.map((link, key) => {
        return (
          <li key={key}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  ) : (
    <div></div>
  );

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

  return (
    <div>
      <div
        className="desktop-app_behind"
        ref={openAppBehindRef}
        onClick={closeApp}
      />
      <div className="desktop-app_open fade-in-element" ref={openAppRef}>
        <div className="app_open-banner">
          <span className="windowTitle">{app.name}</span>
          <CloseButton view="desktop" onClickCallback={closeApp} />
        </div>

        <div className="desktop-app--content_wrapper">
          <div className="app--header-image">
            <img src={headerImagePath} alt="App Logo" />
          </div>

          <p>{app.shortText}</p>

          <div className="app-description_wrapper">
            {app &&
              app.description &&
              app.description.length > 0 &&
              app.description.map((paragraph, key) => {
                return (
                  <p key={key}>
                    <img
                      className="app-description--icon"
                      src={iconImagePath}
                      alt="bullet points for description"
                    ></img>
                    {paragraph}
                  </p>
                );
              })}
          </div>

          {links}
        </div>
      </div>
    </div>
  );
}

export default OpenDesktopApp;
