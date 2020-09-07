import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
