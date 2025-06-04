import { useContext } from "react";
import "./AppAboutPage.css";
import AppsContext from "../../context/AppsContext";
import CallToActionButton from "../buttons/CallToActionButton";

type AppAboutPageProps = {
  firstFocusRef?: React.RefObject<HTMLAnchorElement | null>;
  lastFocusRef?: React.RefObject<HTMLButtonElement | null>;
};

function AppAboutPage(props: AppAboutPageProps) {
  const { firstFocusRef, lastFocusRef } = props;

  const { selectedApp } = useContext(AppsContext);
  const { headerImage, descriptions, directory, shortText, name } = selectedApp;

  const headerImagePath = `resources/${directory}/${headerImage}`;
  //   const iconImagePath = `resources/${directory}/${iconImage}`;

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    // If the key pressed is Tab then we are on the last button and need to focus the close "X" button
    console.log("key pressed");
    if (event.key === "Tab" && firstFocusRef) {
      console.log("focusing first element");
      setTimeout(() => {
        lastFocusRef?.current?.focus();
      }, 0);
    }
  };

  const links = selectedApp?.links?.length ? (
    selectedApp.links.map((link, key) => {
      const { text, url } = link;

      if (key === 0 && firstFocusRef) {
        return (
          <CallToActionButton
            focusRef={firstFocusRef}
            key={key}
            buttonText={text}
            href={url}
          />
        );
      }

      if (
        selectedApp?.links &&
        key === selectedApp.links.length - 1 &&
        lastFocusRef
      ) {
        return (
          <CallToActionButton
            key={key}
            buttonText={text}
            href={url}
            onKeyDown={onKeyDownHandler}
          />
        );
      }

      return <CallToActionButton key={key} buttonText={text} href={url} />;
    })
  ) : (
    <></>
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

  return (
    <div className="desktop-app--content_wrapper">
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
    </div>
  );
}

export default AppAboutPage;
