import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { LargeText, SmallText } from '../text';
import AppColors from '../../utils/AppColors';

type GalleryProps={
  source?: string
  title?: string
  caption?: string
  onPress?: () => void
}
const Gallery = ({
  source,
  title,
  caption,
  onPress = () => null
}: GalleryProps) => {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: source}} style={styles.coverImage} resizeMode='cover'/>
     <View style={styles.textContainer}>
      <LargeText size={5} color={AppColors.white}>{title}</LargeText>
      <SmallText color={AppColors.white}>{caption}</SmallText>
      </View>
    </Pressable>
  );
};

export default Gallery;
