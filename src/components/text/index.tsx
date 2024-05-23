import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';

type TextComponentProps = {
  children?: ReactNode;
  color?: string;
  textStyles?: object;
  size?: number;
  textAlign?: any;
  textProps?: any;
  onPress?: () => void;
  numberOfLines?: number;
  textDecorationLine?: string;
}

export const LargeText = ({
  children = '',
  color = AppColors.black,
  textStyles = {},
  size = 6.5,
  textAlign,
  textProps,
  onPress = undefined,
  numberOfLines
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'700'
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const MediumText = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.black,
  textStyles,
  textProps,
  onPress = undefined,
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'400'
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const SmallText = ({
  children = '',
  size = 4,
  textAlign,
  color = AppColors.black,
  textStyles,
  textProps,
  onPress = undefined,
  numberOfLines,
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'400'
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const UnderLineText = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.blue,
  textStyles,
  textProps,
  onPress = undefined,
  textDecorationLine = 'underline',
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      textDecorationLine: 'underline',
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};