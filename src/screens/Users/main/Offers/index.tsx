import React from 'react';
import { FlatList, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo } from '../../../../assets/images';
import {
  Header,
  ScreenWrapper,
  OfferCard
} from '../../../../components';
import ScreenNames from '../../../../navigation/routes';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import { offersList } from '../../../../utils/DummyData';
import styles from './styles';

const Offers = ({ navigation }: any) => {
  const renderOfferItem = ({ item }: any) => {
    return (
      <OfferCard 
      source={item.source}
      boatOwnerImage={item.boatOwnerImage}
      title={item.title}
      description={item.description}
      price={item.price}
      duration={item.duration}
      members={item.members}
      backgroundColor={item.backgroundColor}
      onPress={() => navigation.navigate('OfferDetails', { offer: item })}
   />
    )
  }
  return (
    <ScreenWrapper
      scrollEnabled
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
