import React from 'react';
import { ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppColors from '../../utils/AppColors';

type buttonProps = {
  onPress?: () => void,
  disabled?: boolean,
  isLoading?: boolean,
  loaderColor?: string,
  activeOpacity?: number,
  containerStyle?: object,
  iconStyle?: object,
  source?: any,
};
const SocialButton = ({
  onPress = () => null,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  iconStyle = {},
  source,
}: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <Image source={source} style={[styles.iconStyle, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

export default SocialButton;
