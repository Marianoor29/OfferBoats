import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';
import Button from '../button';

type textProps = {
  itemName?: string,
  price?: string,
  source?: any,
  counter?: string | number,
};

const CartItemBox = ({ source, itemName, price, counter }: textProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <View style={styles.textContainer}>
        <Text style={styles.artistName} numberOfLines={1}>
          {itemName}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {price}
        </Text>
        <Button
          buttonStyle={styles.btnStyle}
          text={'Remove'}
          textStyle={styles.btnTextStyle}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.iconView}>
          <AntDesign name="plus" size={width(4)} color={AppColors.blue} />
        </View>
        <Text style={styles.price} numberOfLines={1}>
          {counter}
        </Text>
        <View style={styles.iconView}>
          <AntDesign name="minus" size={width(4)} color={AppColors.blue} />
        </View>
      </View>
    </View>
  );
};

export default CartItemBox;
