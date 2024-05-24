import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { default as Icon, default as Ionicons } from 'react-native-vector-icons/Ionicons';
import { user } from '../../assets/images';
import { Profile, Home, Offers, Trip } from '../../screens/main';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';
import ScreenNames from '../routes';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function MyTabs({ navigation }: any) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused }: any) => {
          if (route.name === ScreenNames.HOME) {
            return (
              <View style={styles.tabItemsStyle}>
                <View
                  style={[
                    styles.bottomTabIndicator,
                    {
                      backgroundColor: focused
                        ? AppColors.darkblue
                        : AppColors.transparent,
                    },
                  ]}
                />
                <Icon
                  name={'home-outline'}
                  size={width(6)}
                  color={focused ? AppColors.darkblue : AppColors.white}
                />
                 <Text style={[styles.textStyle,{color: (focused? AppColors.black: AppColors.white)}]}>
                 Home
                </Text>
              </View>
            );
          }
          if (route.name === ScreenNames.TRIP) {
            return (
              <View style={styles.tabItemsStyle}>
                <View
                  style={[
                    styles.bottomTabIndicator,
                    {
                      backgroundColor: focused
                        ? AppColors.darkblue
                        : AppColors.transparent,
                    },
                  ]}
                />
                <Ionicons
                  name={'boat'}
                  size={width(6)}
                  color={focused ? AppColors.darkblue : AppColors.white}
                />
                 <Text style={[styles.textStyle,{color: (focused? AppColors.black: AppColors.white)}]}>
                 Trip
                </Text>
              </View>
            );
          }
          if (route.name === ScreenNames.PROFILE) {
            return (
              <View style={styles.tabItemsStyle}>
                <View
                  style={[
                    styles.bottomTabIndicator,
                    {
                      backgroundColor: focused
                        ? AppColors.darkblue
                        : AppColors.transparent,
                    },
                  ]}
                />
                  <Image
                  source={user}
                  style={[
                    styles.userImageStyle,
                    { opacity: focused ? 1 : 0.5 },
                  ]}
                />
                 <Text style={[styles.textStyle,{color: (focused? AppColors.black: AppColors.white)}]}>
                Profile
                </Text>
              </View>
            );
          }
          if (route.name === ScreenNames.OFFERS) {
            return (
              <View style={styles.tabItemsStyle}>
                <View
                  style={[
                    styles.bottomTabIndicator,
                    {
                      backgroundColor: focused
                        ? AppColors.darkblue
                        : AppColors.transparent,
                    },
                  ]}
                />
                <FontAwesome6
                  name={'circle-dollar-to-slot'}
                  size={width(6)}
                  color={focused ? AppColors.darkblue : AppColors.white}
                />
                 <Text style={[styles.textStyle,{color: (focused? AppColors.black: AppColors.white)}]}>
                 Offers
                </Text>
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name={ScreenNames.HOME} component={Home} />
      <Tab.Screen name={ScreenNames.OFFERS} component={Offers} />
      <Tab.Screen name={ScreenNames.TRIP} component={Trip} />
      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
