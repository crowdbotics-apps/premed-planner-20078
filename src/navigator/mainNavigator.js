import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile98418Navigator from '../features/UserProfile98418/navigator';
import Tutorial98417Navigator from '../features/Tutorial98417/navigator';
import NotificationList98389Navigator from '../features/NotificationList98389/navigator';
import Settings98388Navigator from '../features/Settings98388/navigator';
import Settings98380Navigator from '../features/Settings98380/navigator';
import UserProfile98378Navigator from '../features/UserProfile98378/navigator';
import UserProfile98347Navigator from '../features/UserProfile98347/navigator';
import Tutorial98346Navigator from '../features/Tutorial98346/navigator';
import NotificationList98318Navigator from '../features/NotificationList98318/navigator';
import Settings98317Navigator from '../features/Settings98317/navigator';
import Settings98309Navigator from '../features/Settings98309/navigator';
import UserProfile98307Navigator from '../features/UserProfile98307/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile98418: { screen: UserProfile98418Navigator },
Tutorial98417: { screen: Tutorial98417Navigator },
NotificationList98389: { screen: NotificationList98389Navigator },
Settings98388: { screen: Settings98388Navigator },
Settings98380: { screen: Settings98380Navigator },
UserProfile98378: { screen: UserProfile98378Navigator },
UserProfile98347: { screen: UserProfile98347Navigator },
Tutorial98346: { screen: Tutorial98346Navigator },
NotificationList98318: { screen: NotificationList98318Navigator },
Settings98317: { screen: Settings98317Navigator },
Settings98309: { screen: Settings98309Navigator },
UserProfile98307: { screen: UserProfile98307Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
