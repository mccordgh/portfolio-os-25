 import { useEffect, useState } from 'react';
// import MobileView from './MobileView/MobileView';

import DesktopView from './desktop-view/DesktopView';

import portfolioAbout from '../data/portfolio_about.json';

// import headIcon from '../res/mccordinator2_head.png';
import AppsContext from '../context/AppsContext';
import { AppDescription, AppGroup } from '../models/AppData';

import appsList from '../data/apps.json';
import './Desktop.css';

const IPAD_PRO_WIDTH = 1024;

function Desktop() {
    const apps: AppGroup[] = appsList.data;
    // const [apps, setApps] = useState<AppGroup[]>(appsList.data);
    const [selectedApp, setSelectedApp] = useState({});
    const [mode, setMode] = useState('');

    const setModeByClientWidth = () => {
        const mode = window.innerWidth > IPAD_PRO_WIDTH ? 'desktop' : 'mobile';
    
        setMode(mode);
    };

    const findAppByIdAndGroup = (id: number, groupName: string) => {
        const group = apps.find(app => app.name === groupName);
        const appToOpen = group?.list[id];
        
        if (appToOpen) {
            appToOpen.directory = group.directory;
        }

        return appToOpen;
      }

    const setSelectedAppLookup = (id: number, group: string) => {
        console.log(`setSelectedAppLookup: ${id}, ${group}`);

        if (group === 'about') {
            setSelectedApp(portfolioAbout as AppDescription);
            return;
        }

        if (group === 'closeApp') {
            setSelectedApp({});
            return;
        }

        const found = findAppByIdAndGroup(id, group);
        
        if (found) {
            setSelectedApp(found);
        } else {
            console.error(`App with id ${id} not found in group ${group}`);
        }
    }
    
    // const openAbout = () => {
    //     setSelectedApp({selectedApp: portfolioAbout});
    // }
    
    // const closeApp = () => {
    //     setSelectedApp({});
    // }  
    
    useEffect(() => {
        window.addEventListener('resize', setModeByClientWidth);

        setModeByClientWidth();
    }, [mode]);

    const contextValue = {
        apps,
        selectedApp,
        setSelectedApp: setSelectedAppLookup,
    };

    // const view = mode === 'desktop' ? <DesktopView /> : <MobileView />
    const view = mode === 'desktop' ? <DesktopView /> : <h1>Mobile View</h1>;

    return <AppsContext.Provider value={contextValue}>
        { view }
    </AppsContext.Provider>
}

export default Desktop;
