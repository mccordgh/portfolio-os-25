import { useContext, useRef } from "react";
import { AppDescription } from "../../../models/AppData";

import AppsContext from "../../../context/AppsContext";

import "./OpenDesktopApp.css";
import CloseButton from "../../buttons/CloseButton";
import AnimationsHelper from "../../../helpers/AnimationsHelper";
import CallToActionButton from "../../buttons/CallToActionButton";

type OpenDesktopAppProps = {
  app: AppDescription;
};

function OpenDesktopApp(props: OpenDesktopAppProps) {
  const { app } = props;
  const { headerImage, iconImage, directory } = app;

  const { setSelectedApp } = useContext(AppsContext);

  const openAppRef = useRef<HTMLDivElement>(null);
  const openAppBehindRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLAnchorElement>(null);

  const headerImagePath = `resources/${directory}/${headerImage}`;
  const iconImagePath = `resources/${directory}/${iconImage}`;

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

  const { name, shortText, description, descriptions } = app;

  const links = app?.links?.length ? (
    app.links.map((link, key) => {
      const { text, url } = link;

      return <CallToActionButton key={key} buttonText={text} href={url} />;
    })
  ) : (
    <></>
  );

  let content = (
    <>
      {!!headerImage && (
        <div className="app--header-image">
          <img src={headerImagePath} alt="App Logo" />
        </div>
      )}

      <p>{shortText}</p>

      <div className="app-description_wrapper">
        {app &&
          description &&
          description.length > 0 &&
          description.map((paragraph, key) => {
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
    </>
  );

  const getDescriptions = (): React.ReactNode => {
    if (!descriptions) return <></>;

    const entries = Object.entries(descriptions || {});
    if (!entries || !entries.length) return <></>;

    return entries.map(([title, subTextArray], index) => {
      return (
        <section key={index}>
          <h2 className="app-content-entry-title">{title}</h2>

          <ul>
            {subTextArray.map((subText, subIndex) => (
              <li key={`${index}-${subIndex}`}>{subText}</li>
            ))}
          </ul>
        </section>
      );
    });
  };

  const getHeaderImageOrDivider = (): React.ReactNode => {
    if (!headerImage) {
      return <div className="app-header-divider"></div>;
    }

    return (
      <div className="app--header-image">
        <img src={headerImagePath} alt="App Logo" />
      </div>
    );
  };

  if (directory && directory === "portfolio") {
    content = (
      <>
        <header>
          <div className="app-header-content--wrapper">
            <h1 className="app-header-title">About: {name}</h1>
            <span className="app-header-subtext">{shortText}</span>
          </div>

          {getHeaderImageOrDivider()}
        </header>

        <main>
          {getDescriptions()}

          <div className="app-call-to-action-wrapper">{links}</div>
        </main>

        <footer></footer>
      </>
    );
  }

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
          <CloseButton
            view="desktop"
            onClickCallback={closeApp}
            ref={closeButtonRef}
          />
        </div>

        <div className="desktop-app--content_wrapper">{content}</div>
      </div>
    </div>
  );
}

export default OpenDesktopApp;
