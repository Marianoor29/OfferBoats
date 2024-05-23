import { View, Text, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './styles';
import { Button, Header, InputField, LargeText, ScreenWrapper, SmallText } from '../../../components';
import AppColors from '../../../utils/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import { userSchema } from '../../../utils/validationSchemas';
import ScreenNames from '../../../navigation/routes';
import { width } from '../../../utils/Dimension';
import CommonStyles from '../../../utils/CommonStyles';
import { setAppLoader } from '../../../redux/slice/config/loaderSlice';
import { loginUser } from '../../../redux/slice/user/userSlice';
import { useAppDispatch } from '../../../redux/store/hook';

type FormValues = {
  firstName: string,
  lastName: string,
  email: string,
  password: any,
  ConfirmPassword: any,
};

const SignUp = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: '12345678',
      ConfirmPassword: '12345678',
    },
    resolver: yupResolver(userSchema),
  });
  const SignUpMethod = () => {
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
      scrollEnabled
      statusBarColor={AppColors.white}
      barStyle="dark-content"
      headerUnScrollable={() => {
        return (
          <Header
            onPressFirstIcon={() => navigation.goBack()}
            firstIcon={<AntDesign name={'left'} size={width(5)} color={AppColors.blue} />}
          />
        )
      }}
      footerUnScrollable={() => {
        return(
          <View style={styles.footerStyle}>
        <SmallText> Already have an account</SmallText>
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          text={'Login'}
          buttonStyle={styles.signUpButtonStyle}
          textStyle={{ color: AppColors.grey }}
        />
          </View>
        )
      }}
      >
      <View style={styles.container}>
      <LargeText textStyles={CommonStyles.marginBottom_2}> Register your account</LargeText>
        <View style={styles.nameViewStyle}>
            <View>
            <InputField
              title="First Name"
              placeholder="Enter first name"
              returnKeyLabel="next"
              control={control}
              name={'firstName'}
              error={errors?.firstName?.message}
              onSubmitEditing={() => lastNameRef?.current?.focus()}
              containerStyle={styles.nameInputContainerStyle}
              textinputStyle={styles.nameInputTextStyle}
            />
            </View>
            <View>
            <InputField
              ref={lastNameRef}
              title="Last Name"
              placeholder="Enter last name"
              returnKeyLabel="next"
              control={control}
              name={'lastName'}
              error={errors?.lastName?.message}
              onSubmitEditing={() => emailRef?.current?.focus()}
              containerStyle={styles.nameInputContainerStyle}
              textinputStyle={styles.nameInputTextStyle}
            />
            </View>
          </View>
        <InputField
        ref={emailRef}
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
          control={control}
          name={'password'}
          returnKeyLabel="next"
          onSubmitEditing={() => confirmPasswordRef?.current?.focus()}
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
         <InputField
         ref={confirmPasswordRef}
        title='Confirm Password'
          placeholder="• • • • • • • • • • • • • • •"
          returnKeyLabel="done"
          control={control}
          name={'ConfirmPassword'}
          icon={
            <MaterialCommunityIcons
              name={'form-textbox-password'}
              size={width(7)}
              color={AppColors.grey}
            />
          }
          error={errors?.ConfirmPassword?.message}
          secureTextEntry={secureConfirmPassword}
          rightSideIcon={
            secureConfirmPassword ? (
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
          onPressRightIcon={() => setSecureConfirmPassword(!secureConfirmPassword)}
        />
        <Button
          onPress={handleSubmit(SignUpMethod)}
          text={'Register'}
          disabled={!isValid}
        />
        
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
