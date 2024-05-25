import React, { useState } from 'react';
import { View, Image, Pressable, Switch, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';
import SwitchButtonRow from '../switchButton';

type ProfileHeaderProps = {
  source?: any,
  container?: any,
  iconView?: boolean,
  isEnabled?: boolean,
  icon1?: any,
  icon2?: any,
  firstIcon?: any,
  onPressFirstIcon?: () => void,
  onPressFirstIcon1?: () => void,
  onPressFirstIcon2?: () => void,
  toggleSwitch?: () => void,
};
const ProfileHeader = ({
  isEnabled,
  container,
  firstIcon,
  iconView = true,
  onPressFirstIcon = () => null,
  onPressFirstIcon1 = () => null,
  onPressFirstIcon2 = () => null,
  toggleSwitch = () => null,
}: ProfileHeaderProps) => {

  return (
    <View style={[styles.container, container]}>
      <Pressable onPress={onPressFirstIcon} style={styles.emptyView}>
        {firstIcon}
      </Pressable>
        <View style={styles.logo}>
        <Text style={styles.screenName}>{isEnabled ? 'Switch to Buyer' :  'Switch to Seller'}</Text>
      <Switch
        trackColor={{ false: AppColors.grey , true: AppColors.grey, }}
        thumbColor={isEnabled ? AppColors.yellow : AppColors.black}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      {iconView && (
        <View style={styles.iconView}>
          <Pressable onPress={onPressFirstIcon1}>
          <FontAwesome name="search" size={width(5)} color={AppColors.yellow} />
          </Pressable>
          <Pressable onPress={onPressFirstIcon2}>
          <FontAwesome name="bell" color={AppColors.yellow} size={width(5)} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ProfileHeader;
