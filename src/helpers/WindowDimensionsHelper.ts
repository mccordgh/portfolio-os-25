const IPAD_PRO_WIDTH = 1024;

type ViewMode = "desktop" | "mobile";

class WindowDimensionsHelper {
  static getModeByClientWidth(): ViewMode {
    return window.innerWidth > IPAD_PRO_WIDTH ? "desktop" : "mobile";
  }
}

export default WindowDimensionsHelper;
