import ImageHelper from "../../../../helpers/ImageHelper";
import { AppDescription } from "../../../../models/AppData";
import MobileAppBig from "./mobile-app-big/MobileAppBig";
import MobileAppSmall from "./mobile-app-small/MobileAppSmall";

type MobileAppProps = {
  id: number;
  state: "small" | "big";
  item: AppDescription;
  directory: string;
};

function MobileApp(props: MobileAppProps) {
  const { state, directory, item, id } = props;

  return state === "small" ? (
    <MobileAppSmall
      iconImage={ImageHelper.getImagePath(directory, item?.iconImage || "")}
    />
  ) : (
    <MobileAppBig directory={directory} id={id} item={item} />
  );
}

export default MobileApp;
