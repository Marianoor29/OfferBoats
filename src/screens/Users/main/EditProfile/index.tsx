import React, { useRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  Header,
  InputField,
  LargeText,
  ScreenWrapper,
  SimpleHeader,
  FilePickerModal
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles';
import { EditUserProfileSchema, userSchema } from '../../../../utils/validationSchemas';
import { useAppDispatch } from '../../../../redux/store/hook';
import { FilePickerModalRef } from '../../../../components/filePickerModal';


type FormValues = {
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  password: any,
  ConfirmPassword: any,
};
const EditProfile = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const addressRef = useRef<TextInput>(null);
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
      address: 'john@doe.com',
      password: '12345678',
      ConfirmPassword: '12345678',
    },
    resolver: yupResolver(EditUserProfileSchema),
  });
  const showProfileModal = useRef<FilePickerModalRef>()
  const showCoverModal = useRef<FilePickerModalRef>();
  const [profImage, setProfImage] = useState('https://images.news18.com/ibnlive/uploads/2023/05/want-a-yummy-dip-for-sandwiches-try-this-easy-tomato-chutney-recipe-36-16848174013x2.png?impolicy=website&width=640&height=480');
  const [coverImage, setCoverImage] = useState('https://clubmahindra.gumlet.io/blog/media/section_images/summervaca-7c8772fe00929fa.jpg?w=376&dpr=2.6');
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
          <SimpleHeader 
          onPressFirstIcon={() => navigation.goBack()}
          emptyView={<LargeText size={4}>Edit your profile</LargeText>}
          />
      )}
    >
      <View style={styles.container}>
        <View style={styles.ImagesView}>
          <Image source={{uri : coverImage && coverImage }} 
           style={styles.coverPhoto} />
            <Pressable style={styles.cameraIconTopView} onPress={()=>showCoverModal?.current?.show()}>
           <FontAwesome
              name={'camera'}
              size={width(7)}
              color={AppColors.white}
            />
           </Pressable>
           <FilePickerModal
      ref={showCoverModal}
      onFilesSelected={(k)=>  setCoverImage(k.path)}
      />
        <Image source={{uri : profImage && profImage }} 
           style={styles.userImage} />
           <Pressable style={styles.cameraIconView} onPress={()=>showProfileModal?.current?.show()}>
           <FontAwesome
              name={'camera'}
              size={width(7)}
              color={AppColors.white}
            />
           </Pressable>
           <FilePickerModal
      ref={showProfileModal}
      onFilesSelected={(k)=> setProfImage(k.path)}
      />
           </View>
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
            onSubmitEditing={() => addressRef?.current?.focus()}
          icon={
            <AntDesign name={'user'} size={width(7)} color={AppColors.grey} />
          }
          error={errors?.email?.message}
        />  
        <InputField
        ref={addressRef}
        title='Address'
          placeholder="Enter a Address"
          control={control}
          name={'address'}
            returnKeyLabel="next"
            onSubmitEditing={() => passwordRef?.current?.focus()}
          icon={
            <AntDesign name={'user'} size={width(7)} color={AppColors.grey} />
          }
          error={errors?.address?.message}
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
          onPress={() => navigation.goBack()}
          text={'Submit'}
          disabled={!isValid}
        />
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;
