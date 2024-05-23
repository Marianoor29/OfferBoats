import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import CommonStyles from '../../utils/CommonStyles';
import Button from '../button';
import AppColors from '../../utils/AppColors';
import { user } from '../../assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { width } from '../../utils/Dimension';

type props = {
  container?: object,
  source?: any,
  value?: any,
  onChange?: () => void,
  inputStyle?: object,
  onPressPhoto?: () => void,
  onPressVideo?: () => void,
  onPressBook?: () => void,
  onPressList?: () => void,
};

const CreatePost = ({
  container = {},
  source,
  value,
  onChange = () => null,
  inputStyle = {},
  onPressPhoto = () => null,
  onPressVideo = () => null,
  onPressBook = () => null,
  onPressList = () => null,
}: props) => {
  return (
    <View style={[styles.container, container]}>
      <View style={styles.postViewStyle}>
        <View style={CommonStyles.rowAlignItemCenter}>
          <Image source={source ?? user} style={styles.userImageStyle} />
          <TextInput
            placeholder="Share a post"
            placeholderTextColor={AppColors.grey}
            value={value}
            onChange={onChange}
            style={[styles.inputStyle, inputStyle]}
          />
        </View>
        <Button
          text="Post"
          buttonStyle={styles.btnStyle}
          textStyle={styles.postButtonText}
        />
      </View>
      <View style={styles.ChoosePhotosViewStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={CommonStyles.rowAlignItemCenter}
          onPress={onPressPhoto}>
          <FontAwesome name="photo" size={width(4)} color={AppColors.blue} />
          <Text style={styles.textStyle}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={CommonStyles.rowAlignItemCenter}
          onPress={onPressVideo}>
          <FontAwesome
            name="video-camera"
            size={width(4)}
            color={AppColors.blue}
          />
          <Text style={styles.textStyle}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={CommonStyles.rowAlignItemCenter}
          onPress={onPressBook}>
          <FontAwesome name="th-list" size={width(4)} color={AppColors.blue} />
          <Text style={styles.textStyle}>Choose Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
