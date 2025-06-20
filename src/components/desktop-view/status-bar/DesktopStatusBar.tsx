import AppsContext from "../../../context/AppsContext";
import "./DesktopStatusBar.css";

import { version } from "../../../data/version.json";
import { useContext, useEffect, useState } from "react";
import ClockHelper from "../../../helpers/ClockHelper";

function DesktopStatusBar() {
  const [time, setTime] = useState("");
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

  const { setSelectedApp, toggleExpansionClass } = useContext(AppsContext);

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
    toggleExpansionClass("about");
    setSelectedApp("about");
  };

  return (
    <div className="desktop_banner-container">
      <div className="desktop_banner-left">
        <span id="portfolio-title">Portfolio OS v{version}</span>
        <a href="#" className="banner-left--highlights" onClick={clickHandler}>
          About This Portfolio
        </a>
        <span className="banner-left--highlights">
          <a
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
