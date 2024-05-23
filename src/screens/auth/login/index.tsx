import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {
  BottomIcons,
  Button,
  InputField,
  ScreenWrapper,
  SocialButton,
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import { facebook, google, linkedin, logo } from '../../../assets/images';
import ScreenNames from '../../../navigation/routes';
import { width } from '../../../utils/Dimension';
import { userLoginSchema } from '../../../utils/validationSchemas';
import { useAppSelector, useAppDispatch } from '../../../redux/store/hook';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
type FormValues = {
  email: string,
  password: any,
};

const Login = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const logInMethod = () => {
    dispatch(setAppLoader(true));
    console.log('loader true');
    setTimeout(() => {
      dispatch(loginUser(true));
      dispatch(setAppLoader(false));
      console.log('loader false');
    }, 600);
  };
  const [securePassword, setSecurePassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      email: 'john@doe.com',
      password: '12345678',
    },
    resolver: yupResolver(userLoginSchema),
  });

  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.white}
      barStyle="dark-content">
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.title}> Log in to your account</Text>
        <InputField
          placeholder="Enter a Name"
          control={control}
          name={'email'}
          keyboardType="email-address"
          icon={
            <AntDesign name={'user'} size={width(7)} color={AppColors.grey} />
          }
          error={errors?.email?.message}
        />
        <InputField
          placeholder="Enter a Password"
          control={control}
          name={'password'}
          icon={
            <MaterialCommunityIcons
              name={'form-textbox-password'}
              size={width(7)}
              color={AppColors.grey}
            />
          }
          error={errors?.password?.message}
          secureTextEntry={securePassword}
          rightSideIcon={
            securePassword ? (
              <MaterialCommunityIcons
                name={'eye-outline'}
                size={width(7)}
                color={AppColors.grey}
              />
            ) : (
              <MaterialCommunityIcons
                name={'eye-off'}
                size={width(7)}
                color={AppColors.grey}
              />
            )
          }
          onPressRightIcon={() => setSecurePassword(!securePassword)}
        />
        <Button
          onPress={handleSubmit(logInMethod)}
          text={'Login'}
          disabled={!isValid}
        />
        <Text style={styles.signupText}> or login with</Text>

        <View style={styles.socialBtnViewStyle}>
          <SocialButton source={facebook} />
          <SocialButton source={google} />
          <SocialButton source={linkedin} iconStyle={styles.linkedIn} />
        </View>
        <Text style={styles.signupText}> Don't have an account</Text>
        <Button
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
          text={'SignUp'}
          buttonStyle={styles.signUpButtonStyle}
          textStyle={{ color: AppColors.grey }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Login;
