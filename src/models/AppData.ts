type LinkDescription = {
  url: string;
  text: string;
};

type AppDirectory = "social_media" | "game_dev" | "music";

export type AppDescription = {
  isMobileFriendly?: boolean; // able to play or navigate on mobile
  name?: string;
  iconImage?: string;
  shortText?: string;
  description?: string[];
  links?: LinkDescription[];
  headerImage?: string;
  activeLink?: string;
  directory: AppDirectory;
};

export type AppGroup = {
  name: string;
  directory: AppDirectory;
  list: AppDescription[];
};

type AppData = {
  data: AppGroup[];
};

export default AppData;
