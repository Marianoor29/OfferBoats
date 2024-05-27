import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { logout, payment, setting, transaction } from '../../../assets/images';
import {
  ProfileHeader,
  ProfileInfo,
  ScreenRow,
  ScreenWrapper
} from '../../../components';
import ScreenNames from '../../../navigation/routes';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { useAppDispatch } from '../../../redux/store/hook';
import CommonStyles from '../../../utils/CommonStyles';
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
const Profile = ({ navigation, route }: any) => {
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
       coverImage = {'https://clubmahindra.gumlet.io/blog/media/section_images/summervaca-7c8772fe00929fa.jpg?w=376&dpr=2.6'}
       userImage = {'https://images.news18.com/ibnlive/uploads/2023/05/want-a-yummy-dip-for-sandwiches-try-this-easy-tomato-chutney-recipe-36-16848174013x2.png?impolicy=website&width=640&height=480'}
       firstName = 'Maria'
       lastName= 'Noor'
       email= 'maria@email.com'
       address= 'England, UK'
       completedTrips= {10}
       rating= {3.4}
       onPress={() => navigation.navigate(ScreenNames.EDITPROFILE)}
       />
       <View style={CommonStyles.marginTop_3}>
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
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
