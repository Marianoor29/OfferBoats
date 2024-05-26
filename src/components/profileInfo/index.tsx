import React, { useState } from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import styles from './styles';
import Button from '../button';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { LargeText, SmallText } from '../text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';
import SwitchButtonRow from '../switchButton';

type profileInfoProps = {
  coverImage?: string,
  userImage?: string,
  container?: any,
  firstName?: string,
  lastName?: string,
  rating: number;
  email?: string,
  completedTrips?: string,
  onPress?: () => void,
};
const profileInfo = ({
  coverImage,
  userImage,
  container,
  firstName,
  lastName,
  rating,
  email,
  completedTrips,
  onPress = () => null,

}: profileInfoProps) => {

  // const handleRatingCompleted = (rating: number) => {
  //   console.log("Rating is: " + rating);
  // };
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? true : false;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const renderStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={`full-${i}`} name="star" size={width(4)} color={AppColors.starYellow} />);
    }
    if (halfStar) {
      stars.push(<Icon key="half" name="star" size={width(4)} color={AppColors.starYellow} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="star-o" size={width(4)} color={AppColors.starYellow} />);
    }
    return stars;
  };  

  return (
    <View style={[styles.container, container]}>
      <View>
          <Image
            source={{
              uri: coverImage
            }}
            style={styles.coverImageStyle}
          />
          <Image source={{uri: userImage}} style={styles.profileImageStyle} />
          <View style={styles.editIconViewStyle}>
            <Button
              text="Edit Profile"
              buttonStyle={styles.editButtonStyle}
              textStyle={styles.editButtonText}
              onPress={onPress}
            />
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.UserNameView}>
            <Text style={styles.nameStyle} numberOfLines={1}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.emailStyle}>{email}</Text>
          </View>
          <View>
          <LargeText size={3} numberOfLines={1} textStyles={styles.tripText}>{completedTrips} Trips Completed</LargeText>
          <View style={styles.Ratingcontainer}>
      <View style={styles.starsContainer}>{renderStars()}</View>
      <SmallText textStyles={styles.ratingText}>Rating: {rating}</SmallText>
    </View>
          {/* <View style={styles.Ratingcontainer}>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={15}
        onFinishRating={handleRatingCompleted}
        style={{ paddingVertical: 10 }}
      />
    </View> */}
   
          </View>
      </View>
      <View>
    
       </View>
    </View>
  );
};

export default profileInfo;
