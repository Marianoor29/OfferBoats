import React from 'react';
import { Text, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import ReactNativeModal from 'react-native-modal';
import AppColors from '../../utils/AppColors';
import { useAppSelector } from '../../redux/store/hook';

const Loader = () => {
  const isLoader = useAppSelector(state => state.loader.setLoader);
  console.log(isLoader, 'isLoader');
  return (
    <ReactNativeModal
      animationInTiming={300}
      animationOutTiming={200}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      isVisible={isLoader}
      backdropOpacity={0.4}>
      <View style={styles.container}>
        <ActivityIndicator size="small" color={AppColors.white} />
        <Text style={styles.text}>Loading</Text>
      </View>
    </ReactNativeModal>
  );
};

export default Loader;
