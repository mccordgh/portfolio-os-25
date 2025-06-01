import { useContext } from "react";
import AppsContext from "../../../context/AppsContext";
import "./Banner.css";
import ClockHelper from "../../../helpers/ClockHelper";
import { version } from "../../../data/version.json";

function Banner() {
  const { setSelectedApp } = useContext(AppsContext);

  return (
    <div className="banner-container">
      <div className="banner-left">
        <span>v{version}</span>

        <span
          onClick={() => {
            setSelectedApp("about");
          }}
        >
          About
        </span>
        <span>
          <a
            className="resume-link"
            href="resources/matthew-mccord-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </span>
      </div>

      <div className="banner-right">
        <span>{ClockHelper.currentTime()}</span>
      </div>
    </div>
  );
}

export default Banner;
