import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Button, InputField, ScreenWrapper } from '../../../components';
import AppColors from '../../../utils/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import { userSchema } from '../../../utils/validationSchemas';
import ScreenNames from '../../../navigation/routes';
import { width } from '../../../utils/Dimension';

type FormValues = {
  email: string,
  password: any,
  ConfirmPassword: any,
};

const SignUp = ({ navigation }: any) => {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      email: 'john@doe.com',
      password: '12345678',
      ConfirmPassword: '12345678',
    },
    resolver: yupResolver(userSchema),
  });

  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.white}
      barStyle="dark-content">
      <View style={styles.container}>
        <LottieView
          source={require('../../../assets/gif/login.json')}
          style={styles.animatedImageStyle}
          autoPlay
          loop
        />
        <Text style={styles.title}> Register your account</Text>
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
        <InputField
          placeholder="Confirm your Password"
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
          onPressRightIcon={() =>
            setSecureConfirmPassword(!secureConfirmPassword)
          }
        />
        <Button
          // onPress={handleSubmit(navigation.navigate(ScreenNames.HOME))}

          text={'Register'}
          disabled={!isValid}
        />
        <Text style={styles.signupText}> Already have an account</Text>
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          text={'Login'}
          buttonStyle={styles.signUpButtonStyle}
          textStyle={{ color: AppColors.grey }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
