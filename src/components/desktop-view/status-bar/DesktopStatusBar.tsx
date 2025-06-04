import AppsContext from "../../../context/AppsContext";
import "./DesktopStatusBar.css";

import { version } from "../../../data/version.json";
import { useContext, useEffect, useState } from "react";
import ClockHelper from "../../../helpers/ClockHelper";

function DesktopStatusBar() {
  const [time, setTime] = useState("");
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

  const { setSelectedApp } = useContext(AppsContext);

  useEffect(() => {
    if (!timeInterval) {
      const interval = setInterval(() => {
        setTime(ClockHelper.currentTime());

        return;
      }, 1000);

      setTimeInterval(interval);
    }
  }, [timeInterval]);

  const clickHandler = () => {
    setSelectedApp("about");
  };

  return (
    <div className="desktop_banner-container">
      <div className="desktop_banner-left">
        <span id="portfolio-title">Portfolio OS v{version}</span>
        <a
          href="#"
          // tabIndex={1}
          className="banner-left--highlights"
          onClick={clickHandler}
          // onKeyUp={(e) => {
          //   if (e.key === "Enter") {
          //     clickHandler();
          //   }
          // }}
        >
          About This Portfolio
        </a>
        <span className="banner-left--highlights">
          <a
            // tabIndex={2}
            className="resume-link"
            href="resources/matthew-mccord-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume as PDF
          </a>
        </span>
      </div>

      <div className="desktop_banner-right">
        <span>{time}</span>
      </div>
    </div>
  );
}

export default DesktopStatusBar;
