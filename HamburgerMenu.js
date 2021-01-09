import {
 createAppContainer,
} from 'react-navigation';
import {
 createDrawerNavigator,
} from 'react-navigation-drawer';

import Settings from './SettingsScreen';
import AddProfile from './AddProfileScreen';
import SignOut from './SignOut';

const HamburgerNavigation = createDrawerNavigator(
    {
        Settings: Settings,
        "Add Profile": AddProfile,
        "Sign Out": SignOut,
    }
 );


export default createAppContainer(HamburgerNavigation);
