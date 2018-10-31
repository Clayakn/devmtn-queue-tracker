import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import  HomeScreen  from './components/HomeScreen';
import LoginScreen  from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';

const HomeStack = createStackNavigator(
    {
    Home: HomeScreen,
    Login: LoginScreen
    },
    {
        initialRouteName: 'Login'
    }
);

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen
    },
    {
        initialRouteName: 'Settings'
    }
);


const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack, 
        Settings: SettingsStack
    },
);

export default TabNavigator;