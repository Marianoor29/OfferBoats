import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './bottom';
import ScreenNames from './routes';
import { Login, SignUp } from '../screens/auth';
import { useAppSelector } from '../redux/store/hook';
import { Loader } from '../components';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  React.useEffect(() => {
    setTimeout(() => {
     SplashScreen.hide();
    }, 1000);
   },[])
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  console.log(isLoggedIn, 'isLoggedIn');
  return (
    <NavigationContainer>
      <Loader />
      {!isLoggedIn ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LOGIN}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ScreenNames.LOGIN}
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name={ScreenNames.SIGNUP}
            options={{ headerShown: false }}
            component={SignUp}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ScreenNames.HOMEBASE}
            options={{ headerShown: false }}
            component={MyTabs}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
