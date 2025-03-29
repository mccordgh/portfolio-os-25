import { useContext } from 'react';

// import DesktopAppGroup from './DesktopAppGroup/DesktopAppGroup';
// import DesktopStatusBar from './DesktopStatusBar/DesktopStatusBar';
// import Mccordinator from '../Mccordinator/Mccordinator';
// import OpenDesktopAppWindow from './OpenDesktopAppWindow/OpenDesktopAppWindow';

import './DesktopView.css';
import AppsContext from '../../context/AppsContext';
import DesktopAppGroup from './AppGroup/DesktopAppGroup';

function DesktopView() {
    const { apps } = useContext(AppsContext);

    // const appGroups = (
    //     apps.map((appGroup, key) => {
    //         return (
    //             <DesktopAppGroup
    //                 key={key}
    //                 name={appGroup.name}
    //                 list={appGroup.list}
    //                 directory={appGroup.directory}
    //                 // openAppCallback={this.props.openAppCallback}
    //             />
    //         );
    //     })
    // );

    // const selected = selectedApp.name
    //     ? (<h2>{selectedApp.name}</h2>
    //         // <OpenDesktopAppWindow
    //         //     directory={this.props.selectedApp.directory}
    //         //     app={this.props.selectedApp}
    //         //     closeAppCallback={this.props.closeAppCallback}
    //         // />
    //     )
    //     : (
    //         <div></div>
    //     );

    return (
        <div className="desktop-container">
            {/* <DesktopStatusBar
                openAboutCallback={this.props.openAboutCallback}
            /> */}
            
            { apps && 
                apps.map((appGroup, key) => {
                    return (
                        <DesktopAppGroup
                            key={key}
                            name={appGroup.name}
                            list={appGroup.list}
                            directory={appGroup.directory}
                        />
                    );
                })
            }

            {/* { selectedApp } */}
            {/* <Mccordinator /> */}
        </div>
    );
}

export default DesktopView;
