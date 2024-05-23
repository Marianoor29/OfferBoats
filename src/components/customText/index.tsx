import React from 'react';
import { View, Text, TextProps } from 'react-native';
import styles from './styles';

type textProps = {
  text?: String | number,
};

const CustomText = ({ text }: textProps) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomText;
