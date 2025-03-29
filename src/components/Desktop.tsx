 import { useEffect, useState } from 'react';
// import MobileView from './MobileView/MobileView';

import DesktopView from './DesktopView/DesktopView';

// import portfolioAbout from '../json/portfolio_about.json';

// import headIcon from '../res/mccordinator2_head.png';
import AppsContext from '../context/AppsContext';
import { AppGroup } from '../models/AppData';

import appsList from '../data/apps.json';
import './Desktop.css';

const IPAD_PRO_WIDTH = 1024;

function Desktop() {
    const apps: AppGroup[] = appsList.data;
    // const [apps, setApps] = useState<AppGroup[]>(appsList.data);
    const [selectedApp, setSelectedApp] = useState({});
    const [mode, setMode] = useState('');

    const setModeByClientWidth = () => {
        console.log('setting mode by client width FUNCTION');
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
    const view = <DesktopView />;

    return <AppsContext.Provider value={contextValue}>
        { view }
    </AppsContext.Provider>
}

export default Desktop;

// export default class Desktop extends Component {
//   constructor() {
//     super();

//     this.state = {
//       apps: [],
//       selectedApp: {},
//       mode: '',
//     };

//     this.setModeByClientWidth = this.setModeByClientWidth.bind(this);
//   }

//   render() {
//     const mobileMode = (
//       <MobileView
//         apps={this.state.apps}
//         headIcon={headIcon}
//         selectedApp={this.state.selectedApp}
//         openAppCallback={this.openApp.bind(this)}
//         closeAppCallback={this.closeApp.bind(this)}
//         openAboutCallback={this.openAbout.bind(this)}
//         />
//     );

//     const desktopMode = (
//       <DesktopView
//         apps={this.state.apps}
//         name={this.props.name}
//         selectedApp={this.state.selectedApp}
//         closeAppCallback={this.closeApp.bind(this)}
//         openAppCallback={this.openApp.bind(this)}
//         openAboutCallback={this.openAbout.bind(this)}
//       />
//     );

//     return this.state.mode === 'desktop' ? desktopMode : mobileMode;
//   }

//   init() {
//     this.setState({apps: appsList.data});

//     // const appsWithBgColors = this.setAppsBgColors(appsList.data);
//     // this.setState({apps: appsWithBgColors});
//   }

//   componentDidMount() {
//     this.init();
//     this.setModeByClientWidth();
//     window.addEventListener('resize', this.setModeByClientWidth);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.setModeByClientWidth);
//   }

//   setModeByClientWidth() {
//     const mode = window.innerWidth > IPAD_PRO_WIDTH ? 'desktop' : 'mobile';

//     this.setState({mode});
//   }

//   getAppsInfo() {
//     // return new Promise((resolve) => {
//       // resolve(this.setAppsBgColors(appsList.data))
//     // });
//   }

//   setAppsBgColors(data) {
//     return data.map(appGroup => {
//       appGroup.list = appGroup.list.map((item) => {
//         return item.bgColor ? item.bgColor : Object.assign({}, item, {bgColor: this.getRandomColor()})
//       });

//       return appGroup;
//     });
//   }

//   getRandomColor() {
//     // const colors = ['red', 'green', 'orange', 'blue', 'purple', 'gold'];
//     const colors = ['#133F60', '#63B8F9', '#603E09', '#AD7C33'];
//     const rndColor = Math.floor(Math.random() * colors.length);

//     return colors[rndColor];
//   }

//   openApp(id, group) {
//     this.setState({selectedApp: this.findAppByIdAndGroup(id, group)});
//   }

//   openAbout() {
//     this.setState({selectedApp: portfolioAbout});
//   }

//   findAppByIdAndGroup(id, groupName) {
//     const group = this.state.apps.find(group => group.name === groupName);
//     const appToOpen = group.list[id];
    
//     appToOpen.directory = group.directory;

//     return appToOpen;
//   }

//   closeApp() {
//     this.setState({selectedApp: {}});
//   }
// }
