import React from 'react';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo } from '../../../assets/images';
import {
  Button,
  Header,
  LargeText,
  ScreenWrapper,
  TopProductCard
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import { width } from '../../../utils/Dimension';
import styles from './styles';
import { offersList } from '../../../utils/DummyData';
import ScreenNames from '../../../navigation/routes';

const Offers = ({ navigation }: any) => {
  const renderOfferItem = ({ item }: any) => {
    return (
      <TopProductCard 
      source={item.source}
      title={item.title}
      price={item.price}
      duration={item.duration}
      members={item.members}
      backgroundColor={item.backgroundColor}
   />
    )
  }
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle="light-content"
      headerUnScrollable={() => (
        <Header
          source={logo}
          firstIcon={
            <Octicons name="filter" size={width(5)} color={AppColors.yellow} />
          }
          onPressFirstIcon2={() => navigation.navigate(ScreenNames.NOTIFICATION)}
        />
      )}>
      <View style={styles.container}>
      <FlatList
              data={offersList}
              renderItem={renderOfferItem}
              keyExtractor={(item, index) => String(index)}
              showsVerticalScrollIndicator={true}
              scrollEnabled={false}
              contentContainerStyle={styles.statusRawContainer}
            />
      
        </View>
    </ScreenWrapper>
  );
};

export default Offers;
