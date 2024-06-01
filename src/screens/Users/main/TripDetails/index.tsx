import React from 'react';
import { FlatList, Image, TextInput, View } from 'react-native';
import {
  Button,
  LargeText,
  MediumText,
  OfferCard,
  OfferDetailCard,
  ScreenWrapper,
  SimpleHeader,
  SmallText
} from '../../../../components';
import styles from './styles';
import { Rating } from 'react-native-ratings';
import AppColors from '../../../../utils/AppColors';
import CommonStyles from '../../../../utils/CommonStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from '../../../../utils/Dimension';
import ScreenNames from '../../../../navigation/routes';

const TripDetails = ({ navigation, route }: any) => {
  const { trip } = route.params;
  const handleRatingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
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
        <Button
          text={
            trip.status === 'Cancelled' ? 'Send Offer Again' :
              trip.status === 'Pending' ? 'Cancel Offer' :
                trip.status === 'Confirmed' ? 'Cancel Offer' :
                  trip.status === 'Completed' ? 'Book Again' : 'Send Offer Again'
          }
          buttonStyle={styles.footerBtnStyle}
          onPress={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
        <Image source={{ uri: 'https://img.freepik.com/premium-photo/sea-travel-banner-with-white-luxury-yacht-sunset-calm-sea-sea-vacation-cruise-travel_187216-794.jpg' }} style={styles.image} />
        <LargeText textStyles={styles.myTripHeadingStyle}>My Trip</LargeText>
        <View style={styles.innerContainer}>
          <LargeText size={4.6}>{trip.tripTitle}</LargeText>
          <View style={styles.tripInfoView}>
            <View>
              <View style={styles.textRowStyle}>
                <Entypo name="location" size={width(4.6)} color={AppColors.black} />
                <MediumText size={3.4} textStyles={CommonStyles.marginLeft_2}>{trip.address}</MediumText>
              </View>
              <View style={styles.textRowStyle}>
                <Entypo name="calendar" size={width(4.6)} color={AppColors.black} />
                <MediumText size={3.4} textStyles={CommonStyles.marginLeft_2}>{trip.date}</MediumText>
              </View>
            </View>
            <View style={styles.statusView}>
              <LargeText color={
                trip.status === 'Cancelled' ? AppColors.red :
                  trip.status === 'Pending' ? AppColors.red :
                    trip.status === 'Confirmed' ? AppColors.green :
                      trip.status === 'Completed' ? AppColors.green
                        : AppColors.black}
                size={4}>{trip.status}</LargeText>
            </View>
          </View>
          <View style={CommonStyles.rowAlignItemCenter}>
            <Image source={{ uri: trip.image }} style={styles.ownerImage} />
            <View style={CommonStyles.marginLeft_3}>
              <LargeText size={4}>{trip.ownerName}</LargeText>
              <SmallText>Owner</SmallText>
            </View>
          </View>
          <OfferDetailCard
            price={trip.price}
            members={trip.members}
            duration={trip.duration}
            container={styles.OfferDetailCardStyles}
          />
          {trip.status === 'Completed' && (
          <Button
          text='Leave Rating'
          buttonStyle={styles.ratingBtnStyle}
          textStyle={{color:AppColors.yellow}}
          onPress={() => navigation.navigate(ScreenNames.LEAVERATING)}
        /> )}
        </View> 
      </View>
    </ScreenWrapper>
  );
};

export default TripDetails;
