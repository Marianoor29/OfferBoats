import React from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from './styles';

type headerProps = {
  source?: any,
  container?: any,
  iconView?: boolean,
  icon1?: any,
  icon2?: any,
  firstIcon?: any,
  onPressFirstIcon?: () => void,
  onPressFirstIcon1?: () => void,
  onPressFirstIcon2?: () => void,
};
const Header = ({
  source,
  container,
  icon1,
  icon2,
  firstIcon,
  iconView = true,
  onPressFirstIcon = () => null,
  onPressFirstIcon1 = () => null,
  onPressFirstIcon2 = () => null,
}: headerProps) => {
  return (
    <View style={[styles.container, container]}>
      <Pressable onPress={onPressFirstIcon} style={styles.emptyView}>
        {firstIcon}
      </Pressable>
      <Image source={source} style={styles.logo} />
      {iconView && (
        <View style={styles.iconView}>
          <Pressable onPress={onPressFirstIcon1}>{icon1}</Pressable>
          <Pressable onPress={onPressFirstIcon2}>{icon2}</Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;
