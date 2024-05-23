import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import AppColors from '../../utils/AppColors';
import { Controller } from 'react-hook-form';
import { Text } from 'react-native';

type inputProps = {
  secureTextEntry?: any,
  placeholder?: string,
  icon?: any,
  rightSideIcon?: any,
  placeholderTextColor?: any,
  control?: any,
  keyboardType?: any,
  name: string,
  error?: any,
  onPressRightIcon?: () => void,
};

const InputField = React.forwardRef(
  (
    {
      placeholder,
      icon,
      placeholderTextColor = AppColors.white,
      rightSideIcon,
      control,
      name,
      secureTextEntry,
      keyboardType,
      error,
      onPressRightIcon = () => null,
    }: inputProps,
    ref: any,
  ) => {
    return (
      <>
        <View style={styles.mainContainer}>
          <View>{icon}</View>
          <View style={styles.container}>
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
                  ref={ref}
                  keyboardType={keyboardType}
                />
              )}
              name={name}
            />
          </View>
          {rightSideIcon && (
            <TouchableOpacity onPress={onPressRightIcon}>
              {rightSideIcon}
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{error ? error : null}</Text>
        </View>
      </>
    );
  },
);

export default InputField;
