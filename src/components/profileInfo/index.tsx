import React, { useState } from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import styles from './styles';
import Button from '../button';
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
  address?: string,
  completedTrips?: number,
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
  address,
  completedTrips = 0,
  onPress = () => null,

}: profileInfoProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? true : false;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const renderStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={`full-${i}`} name="star" size={width(5)} color={AppColors.starYellow} />);
    }
    if (halfStar) {
      stars.push(<Icon key="half" name="star" size={width(5)} color={AppColors.starYellow} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="star-o" size={width(5)} color={AppColors.starYellow} />);
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
            <Text style={styles.emailStyle} numberOfLines={1}>{email}</Text>
            <Text style={styles.emailStyle} numberOfLines={1}>{address}</Text>
          </View>
          <View>
          <LargeText size={3} numberOfLines={1} textStyles={styles.tripText}>{completedTrips} Trips Completed</LargeText>
          <View style={styles.Ratingcontainer}>
      <View style={styles.starsContainer}>{renderStars()}</View>
      <SmallText textStyles={styles.ratingText}>Ratings: {rating}</SmallText>
    </View>
   
          </View>
      </View>
      <View>
    
       </View>
    </View>
  );
};

export default profileInfo;
