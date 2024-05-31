import React from 'react';
import { FlatList, View } from 'react-native';
import {
  LargeText,
  ScreenWrapper,
  SimpleHeader,
  TransactionRow
} from '../../../../components';
import styles from './styles';
import { TransactionList } from '../../../../utils/DummyData';

const Transaction = ({ navigation }: any) => {

  const renderItem = ({ item }: any) => {
    return (
      <TransactionRow
          title={item.title}
          date={item.date}
          time={item.time}
          price={item.price}
          transactionStatus={item.transactionStatus}
          onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}
        />
    )
  }
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4} >Transactions</LargeText>}
        />
      )}>
      <View style={styles.container}>
      <FlatList
              data={TransactionList}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(index)}
              showsVerticalScrollIndicator={true}
              scrollEnabled={false}
              // contentContainerStyle={styles.statusRawContainer}
            />
      
      </View>
    </ScreenWrapper>
  );
};

export default Transaction;
