import { useContext } from "react";
import AppsContext from "../../../context/AppsContext";
import "./Banner.css";
import Clock from "../../../helpers/Clock";

function Banner() {
  const { setSelectedApp } = useContext(AppsContext);

  return (
    <div className="banner-container">
      <div className="banner-left">
        <span
          onClick={() => {
            setSelectedApp("about");
          }}
        >
          About
        </span>
        {/* <span>
            <a
              href={`${IMAGE_PATH}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </span> */}
      </div>

      <div className="banner-right">
        <span>{Clock.currentTime()}</span>
      </div>
    </div>
  );
}

export default Banner;
