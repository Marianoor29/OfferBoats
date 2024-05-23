import { View, Image } from 'react-native';
import React from 'react';
import styles from './styles';

type props = {
  icon1: any,
  icon2: any,
  icon3: any,
};
const BottomIcons = ({ icon1, icon2, icon3 }: props) => {
  return (
    <View style={styles.bottomIcons}>
      <Image source={icon1} style={styles.icon1} />
      <Image source={icon2} style={styles.icon2} />
      <Image source={icon3} style={styles.icon3} />
    </View>
  );
};

export default BottomIcons;
