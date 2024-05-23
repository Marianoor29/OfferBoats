import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { logo, user } from '../../../assets/images';
import AppColors from '../../../utils/AppColors';
import {
  Button,
  CartItemBox,
  Header,
  LargeText,
  ScreenWrapper,
} from '../../../components';
import Feather from 'react-native-vector-icons/Feather';
import { width } from '../../../utils/Dimension';
import { cartList } from '../../../utils/DummyData';
import { useAppDispatch } from '../../../redux/store/hook';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';

const Cart = ({ navigation }: any) => {
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
        {/* <LargeText>Profile Screen</LargeText> */}
        <View>
          <Image
            source={{
              uri: 'https://itisallaboutart.wordpress.com/wp-content/uploads/2018/02/screen-shot-2018-02-23-at-10-18-36-pm.png?w=375&h=243',
            }}
            style={styles.coverImageStyle}
          />
          <Image source={user} style={styles.profileImageStyle} />
          <View style={styles.editIconViewStyle}>
            <Button
              text="Edit Profile"
              buttonStyle={styles.editButtonStyle}
              textStyle={styles.editButtonText}
            />
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.UserNameView}>
            <Text style={styles.nameStyle} numberOfLines={1}>
              Maria Noor
            </Text>
            <Text style={styles.emailStyle}>maria@email.com</Text>
          </View>
          {/* <Text style={styles.nameStyle} numberOfLines={1}>
            Followers 200
          </Text> */}
        </View>
        {/* {cartList.map((item, key) => {
          return (
            <CartItemBox
              key={key}
              source={item.source}
              itemName={item.itemName}
              price={item.price}
              counter={item.counter}
            />
          );
        })} */}
      </View>
    </ScreenWrapper>
  );
};

export default Cart;
