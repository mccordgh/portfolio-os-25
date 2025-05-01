import AppsContext from "../../../context/AppsContext";
import "./DesktopStatusBar.css";

import { version } from "../../../data/version.json";
import { useContext, useEffect, useState } from "react";

function DesktopStatusBar() {
  const [time, setTime] = useState("");
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

  const { setSelectedApp } = useContext(AppsContext);

  const getCurrentTime = (): string => {
    const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    const currentTime = new Date(),
      currentDay = currentTime.getDay();

    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();

    let hoursStr, minutesStr, secondsStr;

    if (minutes < 10) {
      minutesStr = `0${minutes}`;
    } else {
      minutesStr = `${minutes}`;
    }

    if (seconds < 10) {
      secondsStr = `0${seconds}`;
    } else {
      secondsStr = `${seconds}`;
    }

    let suffix = "AM";

    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    if (hours < 10) {
      hoursStr = `0${hours}`;
    } else {
      hoursStr = `${hours}`;
    }

    return `${days[currentDay]} ${hoursStr}:${minutesStr}:${secondsStr} ${suffix}`;
  };

  useEffect(() => {
    setTime(getCurrentTime());

    if (!timeInterval) {
      const interval = setInterval(() => {
        setTime(getCurrentTime());

        return;
      }, 1000);

      setTimeInterval(interval);
    }
  }, [timeInterval]);

  return (
    <div className="desktop_banner-container">
      <div className="desktop_banner-left">
        <span>Portfolio OS v{version}</span>
        {/* <span>Portfolio OS v2.0.0</span> */}
        <span
          className="banner-left--highlights"
          onClick={() => {
            setSelectedApp("about");
          }}
        >
          About This Portfolio
        </span>
        <span className="banner-left--highlights">
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

      <div className="desktop_banner-right">
        <span>{time}</span>
      </div>
    </div>
  );
}

export default DesktopStatusBar;
