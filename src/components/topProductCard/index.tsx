import React from 'react';
import { View, Text, TextProps, Image } from 'react-native';
import styles from './styles';
import AppColors from '../../utils/AppColors';
import Button from '../button';

type textProps = {
  title?: string,
  source?: string,
  subTitle?: string,
  backgroundColor?: string,
  number?: string,
};

const TopProductCard = ({
  source,
  title,
  subTitle,
  number,
  backgroundColor = AppColors.chocolate,
}: textProps) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View>
        <Text style={styles.categoryNameStyle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.categoryNameStyle} numberOfLines={1}>
          {number} % OFF
        </Text>
        <Text style={styles.numberOfItemsStyle} numberOfLines={1}>
          {subTitle}
        </Text>
        <Button
          buttonStyle={styles.btnStyle}
          text={'Buy Now'}
          textStyle={styles.btnTextStyle}
        />
      </View>
      <Image source={{ uri: source }} style={styles.posterImage} />
    </View>
  );
};

export default TopProductCard;
