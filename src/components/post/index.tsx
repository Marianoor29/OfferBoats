import React from "react";
import { View,  Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from "../button";
import AppColors from "../../utils/AppColors";
import { width } from "../../utils/Dimension";
import LikeCommentRow from "../likeCommentBox";
import { user } from "../../assets/images";
import CommonStyles from "../../utils/CommonStyles";

type headerProps ={
  source?: any,
  container?: any,
  iconView?: boolean,
  icon1?: any,
  icon2?: any,
  firstIcon?: any,
  userName?: string
  caption?: string,
  time?: string
  postPicture?: any
  Price?: string
}
const Post = ({
 source,
 container,
 userName,
 time,
 postPicture,
 caption,
 Price
}: headerProps) => {
  return (
    <View style={[styles.container, container]}>
      <View style={styles.userView}>
        <View style={styles.userDetailWrapper}>
      <Image source={source} style={styles.userImage} />
      <View style={styles.userInfoView}>
        <Text style={styles.userName} numberOfLines={1}>{userName}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      </View>
      <View style={styles.settingIcon}>
      <MaterialCommunityIcons name='settings-helper' size={width(6)} color={AppColors.white}/>
      </View>
      </View>
      <Text style={styles.caption} numberOfLines={3}>{caption}</Text>
    <Image source={postPicture} style={styles.postImage} />
    <View style={styles.orderView}>
      <View style={CommonStyles.rowJustifySpaceBtw}>
    <MaterialCommunityIcons name='bookmark-outline' size={width(6)} color={AppColors.white}/>
    <View style={styles.priceView} >
    <Text style={styles.dollar}>$</Text>
    <Text style={styles.userName}>{Price}</Text>
    </View>
    </View>
    <Button buttonStyle={styles.buttonStyle} text={'Buy Now'} textStyle={styles.textStyle}/>
    </View>
    <View style={styles.line}></View>
    <LikeCommentRow 
      numberOfLikes={4}
      nameOfUser={'john doe'}
     comments={'it looks so amazing'}
     userName={'Maria'}
     user={user}
    />
    </View> 
  );
};

export default Post;
