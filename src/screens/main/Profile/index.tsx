import React from 'react';
import { Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { logo, payment, setting, user } from '../../../assets/images';
import {
  Button,
  Header,
  ProfileHeader,
  ScreenRow,
  ScreenWrapper
} from '../../../components';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { useAppDispatch } from '../../../redux/store/hook';
import AppColors from '../../../utils/AppColors';
import { width } from '../../../utils/Dimension';
import styles from './styles';

const ScreenRowList = [
  {
    source:{payment},
    screenName:'Payment Method'
  },
  {
    source:{setting},
    screenName:'Settings'
  },
]
const Profile = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const logOutMethod = () => {
    dispatch(setAppLoader(true));
    setTimeout(() => {
      dispatch(loginUser(false));
      dispatch(setAppLoader(false));
    }, 600);
  };
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle="light-content"
      headerUnScrollable={() => (
        <Header
          source={logo}
          icon1={
            <Feather name="settings" color={AppColors.yellow} size={width(5)} />
          }
          icon2={
            <Feather name="log-out" color={AppColors.yellow} size={width(5)} />
          }
          onPressFirstIcon2={logOutMethod}
        />
      )}
    >
      <View style={styles.container}>
       <ProfileHeader />
       {ScreenRowList.map((item, key) => {
        return(
        <ScreenRow 
       source={item.source}
       screenName= {item.screenName}
       />
        )
       })}
       
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
