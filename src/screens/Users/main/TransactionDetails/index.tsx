import React from 'react';
import { View } from 'react-native';
import {
  LargeText,
  ScreenWrapper,
  SimpleHeader,
  SmallText
} from '../../../../components';
import styles from './styles';
import AppColors from '../../../../utils/AppColors';

const TransactionDetails = ({ navigation, route }: any) => {
  const { transaction } = route.params;
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4} >Transaction details</LargeText>}
        />
      )}>
      <View style={styles.container}>
        <View style={styles.priceView}>
        <LargeText color={AppColors.black}>${transaction.price}</LargeText>
        <LargeText color={transaction.transactionStatus === 'Success' ?  AppColors.green : AppColors.red} size={4} >{transaction.transactionStatus}</LargeText>
        </View>
        
            <View style={styles.rowStyle}>
            <SmallText size={4} color={AppColors.grey}>Transaction ID : </SmallText>
              <LargeText size={4}>{transaction.transactionID}</LargeText>
            </View>
            <View style={styles.rowStyle}>
            <SmallText size={4} color={AppColors.grey}>Discount : </SmallText>
              <LargeText size={4}>{transaction.discount}</LargeText>
            </View>
            <View style={styles.rowStyle}>
            <SmallText size={4} color={AppColors.grey}>Total Amount : </SmallText>
              <LargeText size={4}>${transaction.price}</LargeText>
            </View>
            <View style={styles.rowStyle}>
            <SmallText size={4} color={AppColors.grey}>Date and time : </SmallText>
              <LargeText size={4}>{transaction.date} {transaction.time}</LargeText>
            </View>
            <View style={styles.rowStyle}>
            <SmallText size={4} color={AppColors.grey}>Payment By : </SmallText>
              <LargeText size={4}>  ****{"   "}****{"   "}****{"   "}
              {transaction.paymentBy?.slice(12, 16)} </LargeText>
            </View>
      </View>
    </ScreenWrapper>
  );
};

export default TransactionDetails;
