import React from 'react';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo } from '../../../../assets/images';
import {
  Gallery,
  Header,
  LargeText,
  ScreenWrapper
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import styles from './styles';
import { GallertList } from '../../../../utils/DummyData';
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
        <LargeText size={5}>Ideas for your next trip</LargeText>
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
