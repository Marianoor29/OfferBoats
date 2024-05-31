import React from 'react';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo } from '../../../../assets/images';
import {
  Gallery,
  Header,
  LargeText,
  ScreenWrapper,
  TopDestinationCard
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import styles from './styles';
import { GallertList, TopDestinationList } from '../../../../utils/DummyData';
import ScreenNames from '../../../../navigation/routes';

const Home = ({ navigation }: any) => {
  const renderGalleryItems = ({ item }: any) => {
    return (
      <Gallery
        source={item.source}
        title={item.title}
        caption={item.caption}
      />
    );
  };
  const renderTopDestinationItems = ({ item }: any) => {
    return (
    <TopDestinationCard
    title={item.title}
    source={item.source}
    onPress={() => navigation.navigate('TopDestinationDetails', { TopDestination: item })}
    />
    );
  };
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
          onPressFirstIcon1={() => navigation.navigate(ScreenNames.SEARCH)}
        />
      )}>
      <View style={styles.container}>
      <LargeText size={4} textStyles={styles.headingStyle}>Top destinatios</LargeText>
      <FlatList
          data={TopDestinationList}
          renderItem={renderTopDestinationItems}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.productContainer}
        />

        <LargeText size={4} textStyles={styles.headingStyle}>Ideas for your next trip</LargeText>
        <FlatList
          data={GallertList}
          renderItem={renderGalleryItems}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={styles.productContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
