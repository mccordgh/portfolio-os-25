import ImageHelper from "../../../../helpers/ImageHelper";
import { AppDescription } from "../../../../models/AppData";
import MobileAppBig from "./mobile-app-big/MobileAppBig";
import MobileAppSmall from "./mobile-app-small/MobileAppSmall";

type MobileAppProps = {
  id: number;
  state: "small" | "big";
  item: AppDescription;
  // imagePath: string;
  // activeLink?: string;
  // name: string;
  directory: string;
};

function MobileApp(props: MobileAppProps) {
  const { state, directory, item, id } = props;
  // const { activeLink, name } = item;

  return state === "small" ? (
    <MobileAppSmall
      iconImage={ImageHelper.getImagePath(directory, item?.iconImage || "")}
    />
  ) : (
    <MobileAppBig
      directory={directory}
      id={id}
      item={item}
      // activeLink={activeLink}
      // name={name}
      // iconImage={imagePath}
    />
  );
}

export default MobileApp;
