import React from 'react';
import { View } from 'react-native';
import {
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import styles from './styles';

const Transaction = ({ navigation }: any) => {
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
    
      </View>
    </ScreenWrapper>
  );
};

export default Transaction;
