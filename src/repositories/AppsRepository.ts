import { AppDescription, AppGroup } from "../models/AppData";

import * as allApps from "../data/apps.json";
import portfolioAbout from "../data/portfolio_about.json";

class AppsRepository {
  private apps?: AppGroup[];
  private portfolioAbout?: AppDescription;

  // This method retrieves about portfolio data from the JSON data but could also utilize async API fetching
  private getPortfolioAbout(): AppDescription {
    if (!this.portfolioAbout) {
      this.portfolioAbout = portfolioAbout as AppDescription;
    }
    return this.portfolioAbout;
  }

  private findAppByIdAndGroup(directory: string, id: number): AppDescription {
    const group = this.getApps().find((app) => app.directory === directory);
    const appToOpen = group?.list[id];

    if (appToOpen) {
      appToOpen.directory = group.directory;
    }

    return appToOpen || ({} as AppDescription);
  }

  // This method retrieves all apps from the JSON data but could also utilize async API fetching
  getApps(): AppGroup[] {
    if (!this.apps) {
      this.apps = allApps.data as AppGroup[];
    }
    return this.apps;
  }

  setSelectedAppLookup(group: string, id?: number): AppDescription {
    // Special case when close app "X" is clicked to reset selected app to empty object
    if (!id || !group || group === "closeApp") {
      return {} as AppDescription;
    }

    // Special case for portfolio about page
    if (group === "about") {
      return this.getPortfolioAbout();
    }

    return this.findAppByIdAndGroup(group, id);
  }
}

export default AppsRepository;
