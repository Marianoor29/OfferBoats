import React from "react";
import { View, Text, TextProps, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "./styles";
import CommonStyles from "../../utils/CommonStyles";
import { width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

type textProps = {
    likeCommentContainer?: object
    commentTextBox?: object
    bottomContainer?: object
    iconViewStyle?: object
    imageStyle?: object
    user?: any
    source?: any
    nameOfUser?: string 
    numberOfLikes?: string | number
    NumberOfComments?: string | number
    reposts?: string | number
    onLikePress?: () => void
    onCommentPress?: () => void
    onSendPress?: () => void,
    onPressMenuIcon?: () => void,
    onChangeComment?: () => void,
    onPressSend?: () => void,
    userName?: string
    comments?: string
    commentValue?: any
}

const LikeCommentRow = ({
    likeCommentContainer = {},
    commentTextBox = {},
    iconViewStyle = {},
    imageStyle = {},
    user,
    source,
    nameOfUser,
    numberOfLikes,
    NumberOfComments,
    reposts,
    bottomContainer,
    onLikePress = () => null,
    onCommentPress = () => null,
    onSendPress = () => null,
    onPressMenuIcon = () => null,
    onChangeComment = () => null,
    onPressSend = () => null,
    userName,
    comments,
    commentValue,

}: textProps) => {
    return (
        <View>
             <View style={[styles.likeCommentContainer, likeCommentContainer]}>
          
          </View>
          <View style={[styles.bottomContainer, bottomContainer]}>
            <TouchableOpacity
              onPress={onLikePress}
              style={[styles.iconViewStyle, iconViewStyle]}
            >
              <AntDesign name="like2" color={AppColors.white} size={width(5)} />
              <Text style={styles.iconTextStyle}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCommentPress}
              style={[styles.iconViewStyle, iconViewStyle]}
            >
              <Octicons
                name="comment"
                color={AppColors.white}
                size={width(5)}
              />
              <Text style={styles.iconTextStyle}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSendPress}
              style={[styles.iconViewStyle, iconViewStyle]}
            >
              <MaterialIcons
                name="share"
                color={AppColors.white}
                size={width(5)}
              />
              <Text style={styles.iconTextStyle}>Share</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineView}></View>
          <View style={[styles.commentTextBox, commentTextBox]}>
              <View style={styles.otherLikedTextView}>
              <Text
                numberOfLines={1}
                style={{fontSize: width(3), color:AppColors.grey}}    
              >{nameOfUser} and {numberOfLikes} other liked this
              </Text>
              </View>
              <View style={styles.commentTextView}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: width(3), color:AppColors.grey}}   
                >
                  {NumberOfComments} 16 comments
                </Text>
                </View>
            </View>
            <View style={styles.lineView}></View>
          <View style={styles.commentViewContainer}>
            <Image
              source={source ? source : user}
              style={[styles.user1ImagesStyle, imageStyle]}
            />
            <View style={styles.commentView}>
              <View style={styles.nameAndTimeView}>
                <Text  style={{fontSize: width(3), color:AppColors.blue}}   >
                  {userName}
                </Text>
                <View style={styles.timeAndIconView}>
                  <Text numberOfLines={1} style={styles.timeTextStyle}>
                    2 hr
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={onPressMenuIcon}
                  >
                    <Entypo
                      name="dots-three-horizontal"
                      color={AppColors.white}
                      size={width(3.8)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.commentStyle} numberOfLines={2}>{comments}</Text>
            </View>
          </View>
          <View style={styles.commentBoxContainer}>
            <Text style={styles.moreCommentText}>Load more comments</Text>
            <View style={styles.commentBoxStyle}>
              <TextInput
                placeholder="Write a comment"
                placeholderTextColor={AppColors.grey}
                value={commentValue}
                onChange={onChangeComment}
                style={styles.inputStyle}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPressSend}
                style={styles.sendIconStyle}
              >
                <Feather
                  name="send"
                  color={AppColors.blue}
                  size={width(5.5)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}

export default LikeCommentRow;