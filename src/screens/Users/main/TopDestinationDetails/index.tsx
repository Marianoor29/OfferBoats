import React from 'react';
import { FlatList, View } from 'react-native';
import {
  LargeText,
  OfferCard,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import styles from './styles';
import { offersList } from '../../../../utils/DummyData';

const TopDestinationDetails = ({ navigation, route }: any) => {
  const { TopDestination } = route.params;
  const renderOfferItem = ({ item }: any) => {
    return (
      <OfferCard 
      images={item.images}
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
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4.8} textAlign={'center'}>Top destinatios in {TopDestination.title}</LargeText>}
        />
      )}>
      <View style={styles.container}>
      <FlatList
              data={offersList}
              renderItem={renderOfferItem}
              keyExtractor={(item, index) => String(index)}
              showsVerticalScrollIndicator={true}
              scrollEnabled={false}
            />
      </View>
    </ScreenWrapper>
  );
};

export default TopDestinationDetails;
