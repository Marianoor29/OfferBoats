import React, { useRef, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  InputField,
  LargeText,
  MediumText,
  ModalWrapper,
  ScreenWrapper,
  SimpleHeader
} from '../../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import AppColors from '../../../utils/AppColors';
import { ModalHandles } from '../../../components/modalWrapper';
import { userOfferSchema } from '../../../utils/validationSchemas';

type FormValues = {
  price: number,
  member: number,
  duration: number,
  description?: string,
};

const OfferDetails = ({ navigation, route }: any) => {
  const { offer } = route.params;
  const modalRef = useRef<ModalHandles>(null);
  const memberRef = useRef<TextInput>(null);
  const durationRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(userOfferSchema),
  });

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader
          onPressFirstIcon={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
        <Image source={{ uri: offer.source }} style={styles.image} />
        <View style={styles.innerContainer}>
          <Image source={{ uri: offer.boatOwnerImage }} style={styles.boatOwnerImage} />
          <View style={styles.addressAndTitleView}>
            <LargeText size={4.6} color={AppColors.yellow} textStyles={styles.title}>{offer.title}</LargeText>
            <MediumText textStyles={styles.smallText}>{offer.address}</MediumText>
          </View>
          <View style={styles.rightTopView}>
            <MediumText textStyles={styles.smallText}>${offer.price}</MediumText>
            <MediumText textStyles={styles.smallText}>{offer.members} members</MediumText>
            <MediumText textStyles={styles.smallText}>{offer.duration} hours</MediumText>
          </View>
        </View>
        <MediumText size={4} textStyles={styles.description}>{offer.description}</MediumText>
        <View style={styles.bottomView}>
          <Button
            text={'Accept Offer'}
            buttonStyle={styles.acceptBtnStyle}
            textStyle={styles.btnTextStyle}
          />
          <Button
            text={'Send Custom Offer'}
            buttonStyle={styles.acceptBtnStyle}
            textStyle={styles.btnTextStyle}
            onPress={() => modalRef?.current?.show()}
          />
        </View>
        <ModalWrapper
          ref={modalRef}
          onClose={() => modalRef?.current?.hide()}
          btnTitle='Submit'
          onPressBtn={() => {
            modalRef?.current?.hide()
            setTimeout(() => {
              navigation.goBack()
            }, 600);
          }}
          children={
            <>
              <LargeText size={4.6} textStyles={styles.modalHeading}>Create a custom offer</LargeText>
              <InputField
                title='Price'
                placeholder="Please write your budget"
                control={control}
                name={'price'}
                keyboardType="numeric"
                returnKeyLabel="next"
                onSubmitEditing={() => memberRef?.current?.focus()}
                error={errors?.price?.message}
              />
               <InputField
               ref={memberRef}
                title='Member'
                placeholder="Enter a number of members"
                control={control}
                name={'member'}
                keyboardType="numeric"
                returnKeyLabel="next"
                onSubmitEditing={() => durationRef?.current?.focus()}
                error={errors?.member?.message}
              />
               <InputField
               ref={durationRef}
                title='Duration'
                placeholder="Enter hours"
                control={control}
                name={'duration'}
                keyboardType="numeric"
                returnKeyLabel="next"
                onSubmitEditing={() => descriptionRef?.current?.focus()}
                error={errors?.duration?.message}
              />
               <InputField
               ref={durationRef}
                title='Description (Optional)'
                multiline
                control={control}
                name={'description'}
                keyboardType="default"
                returnKeyLabel="done"
                error={errors?.description?.message}
                numberOfLines={4}
              />
            </>
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default OfferDetails;
