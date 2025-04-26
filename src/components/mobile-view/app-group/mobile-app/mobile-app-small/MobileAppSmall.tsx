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
    <div className="mobileOsAppGroupSmall">
      <div
        className="mobileOsAppGroupSmallBackground"
        style={mobileAppSmallStyleObject}
      >
        <div className="mobileOsAppGroupSmallContainer"></div>
      </div>
    </div>
  );
}

export default MobileAppSmall;
