import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './bottom';
import ScreenNames from './routes';
import { ForgotPassword, Login, SignUp } from '../screens/Users/auth';
import { useAppSelector } from '../redux/store/hook';
import { Loader } from '../components';
import SplashScreen from 'react-native-splash-screen'
import { EditProfile, FullFeatureList, LeaveRating, Notification, OfferDetails, Payment, Reviews, Search, SendOffer, Setting, TopDestinationDetails, Transaction, TransactionDetails, TripDetails } from '../screens/Users/main';

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
          <Stack.Screen
            name={ScreenNames.FORGOTPASSWORD}
            options={{ headerShown: false }}
            component={ForgotPassword}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ScreenNames.HOMEBASE}
            options={{ headerShown: false }}
            component={MyTabs}
          />
            <Stack.Screen
            name={ScreenNames.NOTIFICATION}
            options={{ headerShown: false }}
            component={Notification}
          />
            <Stack.Screen
            name={ScreenNames.EDITPROFILE}
            options={{ headerShown: false }}
            component={EditProfile}
          />
            <Stack.Screen
            name={ScreenNames.OFFERDETAILS}
            options={{ headerShown: false }}
            component={OfferDetails}
          />
            <Stack.Screen
            name={ScreenNames.PAYMENT}
            options={{ headerShown: false }}
            component={Payment}
          />
            <Stack.Screen
            name={ScreenNames.TRANSACTION}
            options={{ headerShown: false }}
            component={Transaction}
          />
            <Stack.Screen
            name={ScreenNames.SETTING}
            options={{ headerShown: false }}
            component={Setting}
          />
            <Stack.Screen
            name={ScreenNames.TRANSACTIONDETAILS}
            options={{ headerShown: false }}
            component={TransactionDetails}
          />
            <Stack.Screen
            name={ScreenNames.TOPDESTINATIONDETAILS}
            options={{ headerShown: false }}
            component={TopDestinationDetails}
          />
            <Stack.Screen
            name={ScreenNames.FULLFEATURELIST}
            options={{ headerShown: false }}
            component={FullFeatureList}
          />
            <Stack.Screen
            name={ScreenNames.SEARCH}
            options={{ headerShown: false }}
            component={Search}
          />
            <Stack.Screen
            name={ScreenNames.REVIEWS}
            options={{ headerShown: false }}
            component={Reviews}
          />
            <Stack.Screen
            name={ScreenNames.SENDOFFER}
            options={{ headerShown: false }}
            component={SendOffer}
          />
            <Stack.Screen
            name={ScreenNames.TRIPDETAILS}
            options={{ headerShown: false }}
            component={TripDetails}
          />
            <Stack.Screen
            name={ScreenNames.LEAVERATING}
            options={{ headerShown: false }}
            component={LeaveRating}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
