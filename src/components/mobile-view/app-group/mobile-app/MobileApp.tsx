import MobileAppBig from "./mobile-app-big/MobileAppBig";
import MobileAppSmall from "./mobile-app-small/MobileAppSmall";

type MobileAppProps = {
  imagePath: string;
  state: "small" | "big";
  id?: number;
  activeLink?: string;
  name: string;
};

function MobileApp(props: MobileAppProps) {
  const { imagePath, state, activeLink, name, id } = props;

  return state === "small" ? (
    <MobileAppSmall iconImage={imagePath} />
  ) : (
    <MobileAppBig
      id={id}
      activeLink={activeLink}
      name={name}
      iconImage={imagePath}
    />
  );
}

export default MobileApp;
