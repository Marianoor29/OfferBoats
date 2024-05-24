import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import styles from './styles';
import Button from '../button';
import { user } from '../../assets/images';
import { LargeText } from '../text';

type ProfileHeaderProps = {
  coverImage?: string,
  userImage?: string,
  container?: any,
  firstName?: string,
  lastName?: string,
  email?: string,
  completedTrips?: string,
  onPressFirstIcon2?: () => void,
};
const ProfileHeader = ({
  coverImage = 'https://clubmahindra.gumlet.io/blog/media/section_images/summervaca-7c8772fe00929fa.jpg?w=376&dpr=2.6',
  userImage = 'https://images.news18.com/ibnlive/uploads/2023/05/want-a-yummy-dip-for-sandwiches-try-this-easy-tomato-chutney-recipe-36-16848174013x2.png?impolicy=website&width=640&height=480',
  container,
  firstName = 'Maria',
  lastName= 'Noor',
  email= 'maria@email.com',
  completedTrips= '10',

}: ProfileHeaderProps) => {
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
          <LargeText size={3}>{completedTrips} Trips Completed</LargeText>
      </View>
    </View>
  );
};

export default ProfileHeader;
