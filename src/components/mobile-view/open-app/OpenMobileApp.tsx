import { useContext } from "react";
import { AppDescription } from "../../../models/AppData";
import "./OpenMobileApp.css";
import AppsContext from "../../../context/AppsContext";

type OpenMobileAppProps = {
  app: AppDescription;
};

function OpenMobileApp(props: OpenMobileAppProps) {
  const { setSelectedApp } = useContext(AppsContext);
  const { app } = props;

  const image = `resources/${app.directory}/${app.headerImage}`;
  const iconImage = `resources/${app.directory}/${app.iconImage}`;
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
    <></>
  );

  return (
    <div className="openApp">
      {/* <div className="closeAppWrapper">
                    <span onClick={() => {closeAppCallback()}}>[X]</span>
                </div> */}

      <div className="appImageTitle">
        <span>{app.name}</span>

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

      <p>{app.shortText}</p>

      <div className="appDescriptionWrapper">
        {app.description?.map((paragraph, key) => {
          return (
            <div key={key} className="app-description--image-wrapper">
              <img
                className="app-description--icon"
                src={iconImage}
                alt="bullet points for description"
              ></img>
              <p>{paragraph}</p>
            </div>
          );
        })}
      </div>

      {links}
    </div>
  );
}

export default OpenMobileApp;
