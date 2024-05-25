import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';
import SwitchButtonRow from '../switchButton';

type headerProps = {
  source?: any,
  container?: any,
  iconView?: boolean,
  mode?: boolean,
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
  mode = false,
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
      {source && (
        <Image source={source} style={styles.logo} resizeMode='contain' />)}

      {iconView && (
        <View style={styles.iconView}>
          <Pressable onPress={onPressFirstIcon1}>
            <FontAwesome name="search" size={width(5)} color={AppColors.yellow} />
          </Pressable>
          {onPressFirstIcon2 && (
            <Pressable onPress={onPressFirstIcon2}>
              <FontAwesome name="bell" color={AppColors.yellow} size={width(5)} />
            </Pressable>
          )}

        </View>
      )}
    </View>
  );
};

export default Header;
