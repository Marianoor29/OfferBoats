import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import AppColors from '../../utils/AppColors';
import { Controller } from 'react-hook-form';
import { Text } from 'react-native';

type inputProps = {
  secureTextEntry?: any,
  placeholder?: string,
  title?: string,
  icon?: any,
  rightSideIcon?: any,
  placeholderTextColor?: any,
  control?: any,
  keyboardType?: any,
  name: string,
  error?: any,
  returnKeyLabel?: any,
  onPressIn?: any,
  multiline?: boolean,
  numberOfLines?: number,
  maxLength?: number,
  titleStyle?: object,
  iconStyle?: object,
  containerStyle?: object,
  textinputStyle?: object,
  errorView?: object,
  onPressRightIcon?: () => void,
  onSubmitEditing?: () => void,
  onChangeText?: (text: string) => void, // Add onChangeText prop
};

const InputField = React.forwardRef<TextInput, inputProps>(
  (
    {
      placeholder,
      titleStyle = {},
      containerStyle = {},
      textinputStyle = {},
      errorView = {},
      placeholderTextColor = AppColors.grey,
      rightSideIcon,
      control,
      multiline = false,
      maxLength,
      name,
      title,
      returnKeyLabel,
      secureTextEntry,
      keyboardType,
      error,
      onPressIn,
      iconStyle = {},
      numberOfLines = 1,
      onPressRightIcon = () => null,
      onSubmitEditing = () => null,
      onChangeText, // Add onChangeText prop
    }: inputProps,
    ref,
  ) => {
    return (
      <>
        <View style={[styles.mainContainer, containerStyle]}>
          <View>
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
            <View style={[styles.container, textinputStyle]}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                    numberOfLines={numberOfLines}
                    ref={ref} // Forward ref to the TextInput
                    multiline={multiline}
                    keyboardType={keyboardType}
                    onPressIn={onPressIn}
                    onSubmitEditing={onSubmitEditing}
                    maxLength={maxLength}
                    returnKeyType={returnKeyLabel}
                  />
                )}
                name={name}
              />
            </View>
          </View>
          {rightSideIcon && (
            <TouchableOpacity onPress={onPressRightIcon} style={[styles.iconStyle, iconStyle]}>
              {rightSideIcon}
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.errorView, errorView]}>
          <Text style={styles.errorText}>{error ? error : null}</Text>
        </View>
      </>
    );
  },
);

export default InputField;
