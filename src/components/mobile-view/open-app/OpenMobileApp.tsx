import { useContext } from "react";
import { AppDescription } from "../../../models/AppData";
import "./OpenMobileApp.css";
import AppsContext from "../../../context/AppsContext";

type OpenMobileAppProps = {
  app: AppDescription;
};

function OpenMobileApp(props: OpenMobileAppProps) {
  const { setSelectedApp, mode } = useContext(AppsContext);
  const { app } = props;
  const {
    directory,
    headerImage,
    iconImage,
    links,
    isMobileFriendly,
    name,
    shortText,
    description,
  } = app;

  const image = `resources/${directory}/${headerImage}`;
  const iconImagePath = `resources/${directory}/${iconImage}`;
  const appLinks =
    links && links.length ? (
      <ul className="app-links">
        {links?.map((link, key) => {
          // The first link will direct user to go play the game in a browser.
          // When the user is on mobile, any game with isMobileFriendly set to false will not be playable.
          if (
            key === 0 &&
            mode === "mobile" &&
            !isMobileFriendly &&
            directory === "game_dev"
          ) {
            return (
              <li key={key}>
                <span>(To play this game, please use a Desktop device)</span>
              </li>
            );
          }

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
      <></>
    );

  return (
    <div className="openApp">
      <div className="appImageTitle">
        <span>{name}</span>

        <div className="app_close">
          <span
            onClick={() => {
              setSelectedApp("closeApp");
            }}
          >
            X
          </span>
        </div>
      </div>

      <div className="appImageWrapper">
        <img src={image} alt="App Logo" />
      </div>

      <p>{shortText}</p>

      <div className="appDescriptionWrapper">
        {description?.map((paragraph, key) => {
          return (
            <div key={key} className="app-description--image-wrapper">
              <img
                className="app-description--icon"
                src={iconImagePath}
                alt="bullet points for description"
              ></img>
              <p>{paragraph}</p>
            </div>
          );
        })}
      </div>

      {appLinks}
    </div>
  );
}

export default OpenMobileApp;
