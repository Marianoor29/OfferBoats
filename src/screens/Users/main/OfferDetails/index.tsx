import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, Image, ImageBackground, Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import { Button, DropDown, InputField, LargeText, MediumText, ModalWrapper, OfferDetailCard, ReviewBox, ScreenWrapper, SimpleHeader, SmallText } from '../../../../components';
import { ModalHandles } from '../../../../components/modalWrapper';
import ScreenNames from '../../../../navigation/routes';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import { ReviewList } from '../../../../utils/DummyData';
import { userOfferSchema } from '../../../../utils/validationSchemas';
import styles from './styles';

const OfferDetails = ({ navigation, route }: any) => {
  const { offer } = route.params;
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
          <SmallText color={AppColors.grey} size={3.4}>
            Send your detail to the {'\n'}owner to plan your trip.
          </SmallText>
        <Button
          text={'Book Now'}
          buttonStyle={styles.acceptBtnStyle}
          textStyle={styles.btnTextStyle}
          onPress={() => navigation.navigate(ScreenNames.SENDOFFER)}
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
         <View style={styles.reviewHeadingView}>
         <LargeText size={4.6} >Reviews</LargeText>
         <Pressable onPress={() => navigation.navigate(ScreenNames.REVIEWS)}>
         <LargeText size={3} >View all</LargeText>
         </Pressable>
         </View>
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
     
      </View>
    </ScreenWrapper>
  );
};

export default OfferDetails;
