import React from 'react';
import { Pressable, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';
import styles from './styles';

type SimpleHeaderProps = {
  container?: any,
  firstIcon?: any,
  emptyView?: any,
  RightIcon?: any,
  onPressFirstIcon?: () => void,
  onPressRightIcon?: () => void,
};
const SimpleHeader = ({
  container,
  emptyView,
  RightIcon,
  onPressFirstIcon = () => null,
  onPressRightIcon = () => null,
}: SimpleHeaderProps) => {
  return (
    <View style={[styles.container, container]}>
      <Pressable onPress={onPressFirstIcon} style={styles.iconView}>
      <AntDesign name="arrowleft" size={width(5)} color={AppColors.yellow} />
      </Pressable>
      <View style={styles.emptyView}>
        {emptyView}
      </View>
      <Pressable onPress={onPressRightIcon} style={styles.iconView}>
      {RightIcon}
      </Pressable>
    </View>
  );
};

export default SimpleHeader;
