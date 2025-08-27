import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/Screens/Signup';
import Login from './src/Screens/Login';
import Otp from './src/Screens/Otp';
import Register from './src/Screens/Register';
import TabNavigation from './src/Navigation/TabNavigation';
import Notification from './src/Screens/Notification';
import Howtouse from './src/Screens/Howtouse';
import Splash from './src/Screens/Splash';


const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

         <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Howtouse"
          component={Howtouse}
          options={{headerShown: false}}
        />
</Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
