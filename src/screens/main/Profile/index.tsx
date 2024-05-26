import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { logo, logout, payment, setting, transaction,  } from '../../../assets/images';
import {
  Button,
  ProfileHeader,
  ProfileInfo,
  ScreenRow,
  ScreenWrapper,
  SwitchButtonRow
} from '../../../components';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { useAppDispatch } from '../../../redux/store/hook';
import AppColors from '../../../utils/AppColors';
import ScreenNames from '../../../navigation/routes';
import styles from './styles';

const ScreenRowList = [
  {
    key:1,
    source:payment,
    screenName:'Payment Method'
  },
  {
    key:2,
    source:transaction,
    screenName:'Transactions'
  },
  {
    key:3,
    source:setting,
    screenName:'Settings'
  },

]
const Profile = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
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
        <ProfileHeader 
        isEnabled={isEnabled}
        toggleSwitch={() => setIsEnabled(previousState => !previousState)}
        onPressFirstIcon2={() => navigation.navigate(ScreenNames.NOTIFICATION)}
        />
      )}
    >
      <View style={styles.container}>
       <ProfileInfo
       coverImage = 'https://clubmahindra.gumlet.io/blog/media/section_images/summervaca-7c8772fe00929fa.jpg?w=376&dpr=2.6'
       userImage = 'https://images.news18.com/ibnlive/uploads/2023/05/want-a-yummy-dip-for-sandwiches-try-this-easy-tomato-chutney-recipe-36-16848174013x2.png?impolicy=website&width=640&height=480'
       firstName = 'Maria'
       lastName= 'Noor'
       email= 'maria@email.com'
       completedTrips= '10'
       rating= {3.4}
       onPress={() => navigation.navigate(ScreenNames.EDITPROFILE)}
       />
    
       {ScreenRowList.map((item, key) => {
        return(
        <ScreenRow 
        key={item.key}
       source={item.source}
       screenName= {item.screenName}
       />
        )
       })}
        <ScreenRow 
         source={logout}
         screenName={'Logout'}
         onPress={logOutMethod}
       />
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
