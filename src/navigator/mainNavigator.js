import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList98318Navigator from '../features/NotificationList98318/navigator';
import Settings98317Navigator from '../features/Settings98317/navigator';
import Settings98309Navigator from '../features/Settings98309/navigator';
import UserProfile98307Navigator from '../features/UserProfile98307/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
