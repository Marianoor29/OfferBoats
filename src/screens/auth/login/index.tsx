import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { facebook, google, linkedin, logo } from '../../../assets/images';
import {
  Button,
  InputField,
  LargeText,
  ScreenWrapper,
  SmallText,
  SocialButton
} from '../../../components';
import ScreenNames from '../../../navigation/routes';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { useAppDispatch } from '../../../redux/store/hook';
import AppColors from '../../../utils/AppColors';
import CommonStyles from '../../../utils/CommonStyles';
import { width } from '../../../utils/Dimension';
import { userLoginSchema } from '../../../utils/validationSchemas';
import styles from './styles';
type FormValues = {
  email: string,
  password: any,
};

const Login = ({ navigation }: any) => {
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();

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
  const logInMethod = () => {
    dispatch(setAppLoader(true));
    console.log('loader true');
    setTimeout(() => {
      dispatch(loginUser(true));
      dispatch(setAppLoader(false));
      console.log('loader false');
    }, 600);
  };
  return (
    <ScreenWrapper
      scrollEnabled>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        <LargeText textStyles={CommonStyles.marginBottom_2}> Log in to your account</LargeText>
        <InputField
        title='Email'
          placeholder="Enter a Name"
          control={control}
          name={'email'}
          keyboardType="email-address"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordRef?.current?.focus()}
          icon={
            <AntDesign name={'user'} size={width(7)} color={AppColors.grey} />
          }
          error={errors?.email?.message}
        />
        <InputField
        title='Password'
        ref={passwordRef}
          placeholder="• • • • • • • • • • • • • • •"
          returnKeyLabel="done"
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
                size={width(6)}
                color={AppColors.grey}
              />
            ) : (
              <MaterialCommunityIcons
                name={'eye-off'}
                size={width(6)}
                color={AppColors.grey}
              />
            )
          }
          onPressRightIcon={() => setSecurePassword(!securePassword)}
        />

           <SmallText
              textAlign="right"
              size={3.4}
              textStyles={styles.forgotPassTextStyle}
              onPress={() => navigation.navigate(ScreenNames.FORGOTPASSWORD)}
              color={AppColors.yellow}
            >
              Forgot Password?
            </SmallText>
        <Button
          onPress={handleSubmit(logInMethod)}
          text={'Login'}
          disabled={!isValid}
          buttonStyle={styles.signInButtonStyle}
        />
        <SmallText> or login with</SmallText>

        <View style={styles.socialBtnViewStyle}>
          <SocialButton source={facebook} />
          <SocialButton source={google} />
          <SocialButton source={linkedin} iconStyle={styles.linkedIn} />
        </View>
        <SmallText> Don't have an account</SmallText>
        <Button
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
          text={'SignUp'}
          buttonStyle={styles.signUpButtonStyle}
          textStyle={{ color: AppColors.blue }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Login;
