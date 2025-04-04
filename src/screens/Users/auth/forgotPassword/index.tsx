import { yupResolver } from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  InputField,
  LargeText,
  MediumText,
  ModalWrapper,
  ScreenWrapper,
  SimpleHeader,
  SmallText
} from '../../../../components';
import { ModalHandles } from '../../../../components/modalWrapper';
import AppColors from '../../../../utils/AppColors';
import CommonStyles from '../../../../utils/CommonStyles';
import { width } from '../../../../utils/Dimension';
import { ForgotPasswordSchema } from '../../../../utils/validationSchemas';
import styles from './styles';
type FormValues = {
  email: string,
};

const ForgotPassword = ({ navigation }: any) => {
  const modalRef = useRef<ModalHandles>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      email: 'john@doe.com',
    },
    resolver: yupResolver(ForgotPasswordSchema),
  });
  const resetPassword = () => {
    modalRef?.current?.show()
  };
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
        <LargeText textStyles={CommonStyles.marginBottom_2}> Forgot Password?</LargeText>
        <SmallText textStyles={CommonStyles.marginBottom_2} size={3.4}>Enter The E-Mail Address Associated With Your Account.</SmallText>
        <InputField
          title='Email'
          placeholder="Enter a Name"
          control={control}
          name={'email'}
          keyboardType="email-address"
          returnKeyLabel="done"
          icon={
            <AntDesign name={'user'} size={width(7)} color={AppColors.grey} />
          }
          error={errors?.email?.message}
        />
        <Button
          onPress={handleSubmit(resetPassword)}
          text={'Submit'}
          disabled={!isValid}
          buttonStyle={styles.signInButtonStyle}
        />
        <ModalWrapper
          ref={modalRef}
          onClose={() => modalRef?.current?.hide()}
          children={
            <>
              <LottieView source={require('../../../../assets/gif/tick.json')} style={styles.animatedImageStyle} autoPlay loop={false} />
              <MediumText textAlign="center" textStyles={CommonStyles.marginBottom_2} >Password reset link sent {'\n'} to your email</MediumText>
              <Button
              text='CONTINUE'
              onPress={() => {
                modalRef?.current?.hide()
                setTimeout(() => {
                  navigation.goBack()
                }, 600);
              }}
            />
            </>
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
