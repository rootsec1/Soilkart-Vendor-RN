import { createStackNavigator, createNavigationContainer } from 'react-navigation';
//LOCAL
import Splash from './app/screens/Splash';
import SignIn from './app/screens/SignIn';
import Home from './app/screens/Home';

export default createNavigationContainer(createStackNavigator(
  {
    Splash: { screen: Splash },
    SignIn: { screen: SignIn },
    Home: { screen: Home }
  },
  {
    headerMode: 'none'
  }
));