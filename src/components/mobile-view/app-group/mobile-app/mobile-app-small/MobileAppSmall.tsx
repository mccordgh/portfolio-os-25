import "./MobileAppSmall.css";

type MobileAppSmallProps = {
  iconImage: string; // Path to the icon image
};

function MobileAppSmall(props: MobileAppSmallProps) {
  const { iconImage } = props;

  const mobileAppSmallStyleObject = {
    backgroundImage: `url(${iconImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="mobileAppGroupSmall">
      <div
        className="mobileAppGroupSmallBackground"
        style={mobileAppSmallStyleObject}
      >
        <div className="mobileAppGroupSmallContainer"></div>
      </div>
    </div>
  );
}

export default MobileAppSmall;
