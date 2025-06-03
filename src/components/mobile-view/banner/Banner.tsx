import { useContext, useEffect, useState } from "react";
import AppsContext from "../../../context/AppsContext";
import "./Banner.css";
import ClockHelper from "../../../helpers/ClockHelper";
import { version } from "../../../data/version.json";

function Banner() {
  const [time, setTime] = useState("");
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

  const { setSelectedApp } = useContext(AppsContext);

  useEffect(() => {
    if (!timeInterval) {
      const interval = setInterval(() => {
        setTime(ClockHelper.currentTime());
      }, 1000);

      setTimeInterval(interval);
    }
  }, [timeInterval]);

  return (
    <div className="banner-container">
      <div className="banner-left">
        <span className="small-light--text" id="portfolio-title">
          Portfolio v{version}
        </span>

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
        <span className="small-light--text">{time}</span>
      </div>
    </div>
  );
}

export default Banner;
