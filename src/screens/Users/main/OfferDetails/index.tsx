import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, Image, ImageBackground, TextInput, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import {
  Button,
  DropDown,
  InputField,
  LargeText,
  MediumText,
  ModalWrapper,
  OfferDetailCard,
  ReviewBox,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import { ModalHandles } from '../../../../components/modalWrapper';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import { ReviewList } from '../../../../utils/DummyData';
import { userOfferSchema } from '../../../../utils/validationSchemas';
import styles from './styles';

type FormValues = {
  price: number,
  member: number,
  duration: number,
  description?: string,
};

const OfferDetails = ({ navigation, route }: any) => {
  const { offer } = route.params;
  const modalRef = useRef<ModalHandles>(null);
  const modalAcceptOfferRef = useRef<ModalHandles>(null);
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
  const [dropdown, setDropdown] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const truncatedDescription = offer.description.slice(0, 300);
  const renderReviewList = ({ item }: any) => {
    return (
   <ReviewBox
   reviewerName={item.reviewerName}
   reviewerImage={item.reviewerImage}
   reviewDate={item.reviewDate}
   reviewText={item.reviewText}
   rating={item.rating}
   />
    );
  };
  return (
    <ScreenWrapper
      scrollEnabled
      translucent={true}
      statusBarColor={AppColors.transparent}
      barStyle={'light-content'}
      headerUnScrollable={() => {
       return <SimpleHeader
          onPressFirstIcon={() => navigation.goBack()}
          iconView={styles.headerIconView}
          container={styles.headerContainer}
          arrowColor={AppColors.white}
        />
      }}
      footerUnScrollable={() => (
        <View style={styles.bottomView}>
        <Button
          text={'Accept Offer'}
          buttonStyle={styles.acceptBtnStyle}
          textStyle={styles.btnTextStyle}
          onPress={() =>  modalAcceptOfferRef?.current?.show()}
        />
        <Button
          text={'Send Custom Offer'}
          buttonStyle={styles.acceptBtnStyle}
          textStyle={styles.btnTextStyle}
          onPress={() => modalRef?.current?.show()}
        />
      </View>
      )}
      >
      <View style={styles.container}>
      <Carousel
      width={width(100)}
      height={width(60)}
      data={ offer.images}
      renderItem={({ item }: { item: string }) => (
          <ImageBackground source={{ uri: item }} style={styles.image} />
      )}
      loop
      autoPlay
      autoPlayInterval={3000}
    />
        <View style={styles.innerContainer}>
          <Image source={{ uri: offer.boatOwnerImage }} style={styles.boatOwnerImage} />
          <View style={styles.addressAndTitleView}>
          <MediumText size={3.3} color={AppColors.grey}>{offer.address}</MediumText>
            <LargeText size={4.6} color={AppColors.black} textStyles={styles.title}>{offer.title}</LargeText>
          </View>
        </View>
        <OfferDetailCard
        price={offer.price}
        members={offer.members}
        duration={offer.duration}
        rating={4.6}
        />
       
        <View style={styles.descriptionView}>
        <LargeText size={4.6}>The Boat</LargeText>
        <MediumText size={4}>
          {showFullDescription ? offer.description : truncatedDescription}
          {offer.description.length > 300 && (
            <TouchableOpacity onPress={toggleDescription}>
              <LargeText size={4} textStyles={styles.readMoreText}>{showFullDescription ? 'Read Less' : 'Read More'}</LargeText>
            </TouchableOpacity>
          )}
        </MediumText>
        </View>
        <View style={styles.lineView}></View>
        <LargeText size={4.6} textStyles={styles.headingStyle}>Things to Know</LargeText>
        {(offer.allowed || []).map((item, index) => (
          <View key={index} style={styles.featuresView}>
            <MediumText>{item}</MediumText>
            <Feather name='check-circle' size={width(5)} color={AppColors.green} />
          </View>
        ))}
         <View style={styles.lineView}></View>
         <LargeText size={4.6} textStyles={styles.headingStyle}>Reviews</LargeText>
         <FlatList
          data={ReviewList}
          renderItem={renderReviewList}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
         <View style={styles.lineView}></View>
       <DropDown
       title='Cancelation'
       dropdown={dropdown}
       onPress={() => setDropdown(!dropdown)}
       detail=' Embark on an unparalleled maritime journey with "Sea Serenity," where every wave is a promise of extraordinary experiences. Our opulent yacht services redefine luxury, offering a fusion of indulgence, comfort, and adventure. Whether you seek a serene escape, an exhilarating voyage, or a lavish event at sea, we cater to your every desire with meticulous attention to detail.'
       />
        <View style={styles.lineView}></View>
        <LargeText size={4.6} textStyles={styles.headingStyle}>Features</LargeText>
        {(offer.features || []).slice(0, 5).map((item, index) => (
          <View key={index} style={styles.featuresView}>
            <MediumText>{item}</MediumText>
            <Feather name='check-circle' size={width(5)} color={AppColors.green} />
          </View>
        ))}
        {offer.features.length > 5 && (
          <TouchableOpacity onPress={() => navigation.navigate('FullFeatureList', { features: offer.features })}>
            <LargeText size={4} textStyles={styles.readMoreText}>View all</LargeText>
          </TouchableOpacity>
        )}
        <ModalWrapper
          ref={modalRef}
          onClose={() => modalRef?.current?.hide()}
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
              <Button
              text={'Submit'}
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
         <ModalWrapper
          ref={modalAcceptOfferRef}
          onClose={() => modalAcceptOfferRef?.current?.hide()}
          modalContainer={styles.acceptofferModal}
          children={
            <>
              <LargeText size={4.6} textStyles={styles.modalHeading} textAlign={'center'}>are you sure you {`\n`} want to accept offer</LargeText>
              <View style={styles.buttonsView}>
              <Button
              text='Yes'
              buttonStyle={styles.modalButtonStyle}
              onPress={() => {
                modalRef?.current?.hide()
                setTimeout(() => {
                  navigation.goBack()
                }, 600);
              }}
            />
             <Button
              text='No'
              buttonStyle={styles.modalButtonStyle}
              onPress={() => {
                modalRef?.current?.hide()
                setTimeout(() => {
                  navigation.goBack()
                }, 600);
              }}
            />
            </View>
            </>
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default OfferDetails;
