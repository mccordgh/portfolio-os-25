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
  const {
    headerImage,
    descriptions,
    directory,
    shortText,
    name,
    isMobileFriendly,
  } = selectedApp;

  const { mode } = useContext(AppsContext);

  const headerImagePath = `resources/${directory}/${headerImage}`;
  //   const iconImagePath = `resources/${directory}/${iconImage}`;

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    // If the key pressed is Tab then we are on the last button and need to focus the close "X" button
    if (event.key === "Tab" && firstFocusRef) {
      setTimeout(() => {
        lastFocusRef?.current?.focus();
      }, 0);
    }
  };

  const getLinks = () => {
    return selectedApp?.links?.length ? (
      selectedApp.links.map((link, key) => {
        const { text, url } = link;

        const isMobileButNotFriendly =
          mode === "mobile" && directory === "game_dev" && !isMobileFriendly;

        console.log({
          key,
          firstFocusRef,
          isMobileButNotFriendly,
          mode,
          isMobileFriendly,
        });
        if (key === 0) {
          return (
            <CallToActionButton
              disabled={isMobileButNotFriendly}
              focusRef={firstFocusRef}
              key={key}
              buttonText={text}
              disabledText="Play requires desktop device"
              href={url}
            />
          );
        }

        const isLastItemInLinks =
          selectedApp?.links && key === selectedApp.links.length - 1;

        if (isLastItemInLinks && lastFocusRef) {
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
  };

  const getDescriptions = (): React.ReactNode => {
    if (!descriptions) return <></>;

    const entries = Object.entries(descriptions || {});
    if (!entries || !entries.length) return <></>;

    return entries.map(([title, subTextArray], index) => {
      if (!subTextArray || !subTextArray.length) {
        return <></>;
      }

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
    <div className="app--content_wrapper">
      <header>
        <div className="app-header-content--wrapper">
          <h1 className="app-header-title">About: {name}</h1>
          {shortText && <span className="app-header-subtext">{shortText}</span>}
        </div>

        {getHeaderImageOrDivider()}
      </header>

      <main>
        {getDescriptions()}

        <div className="app-call-to-action-wrapper">{getLinks()}</div>
      </main>

      <footer></footer>
    </div>
  );
}

export default AppAboutPage;
