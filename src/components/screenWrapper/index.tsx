import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  StatusBarStyle,
} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';
import AppColors from '../../utils/AppColors';

type wrapperProps = {
  children?: any,
  statusBarColor?: string,
  transclucent?: boolean,
  scrollEnabled?: boolean,
  backgroundImage?: any,
  backgroundColor?: string,
  headerUnScrollable?: () => void,
  footerUnScrollable?: () => void,
  barStyle: StatusBarStyle,
};
const ScreenWrapper = ({
  children,
  statusBarColor = AppColors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  backgroundColor = AppColors.white,
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  barStyle = 'dark-content',
}: wrapperProps) => {
  function FocusAwareStatusBar({ props }: { props: wrapperProps }) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <FocusAwareStatusBar
          props={{
            barStyle: barStyle,
            backgroundColor: statusBarColor,
            transclucent: transclucent,
          }}
        />
        {!transclucent && (
          <SafeAreaView
            style={(styles.container, { backgroundColor: statusBarColor })}
          />
        )}
        {headerUnScrollable()}
        {scrollEnabled ? (
          <KeyboardAwareScrollView
            style={[styles.container, { backgroundColor: backgroundColor }]}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
        {footerUnScrollable()}
      </View>
    );
  };
  return backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode={'cover'}>
      {content()}
    </ImageBackground>
  ) : (
    content()
  );
};

export default ScreenWrapper;
