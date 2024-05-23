import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  CategoryBox,
  GalleryCard,
  Header,
  ScreenWrapper,
  TopProductCard,
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import { logo } from '../../../assets/images';
import { width } from '../../../utils/Dimension';
import {
  categoryList,
  galleryData,
  offersList,
} from '../../../utils/DummyData';

const Categories = ({ navigation }: any) => {
  const renderItems = ({ item }: any) => {
    return (
      <CategoryBox
        source={item.source}
        categoryName={item.categoryName}
        numberOfItems={item.numberOfItems}
      />
    );
  };
  const renderGalleryItem = ({ item }: any) => {
    return <GalleryCard uri={item.uri} title={item.title} price={item.price} />;
  };
  const renderOfferItem = ({ item }: any) => {
    return (
      <TopProductCard
        source={item.source}
        title={item.title}
        subTitle={item.subTitle}
        number={item.number}
        backgroundColor={item.backgroundColor}
      />
    );
  };
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle="light-content"
      headerUnScrollable={() => (
        <Header
          source={logo}
          icon1={
            <AntDesign name="search1" size={width(6)} color={AppColors.white} />
          }
          icon2={
            <AntDesign name="bells" size={width(6)} color={AppColors.white} />
          }
          firstIcon={
            <Ionicons name="filter" size={width(6)} color={AppColors.white} />
          }
        />
      )}>
      <View style={styles.container}>
        <View style={styles.topGalleryView}>
          <Text style={styles.galleryText}>Categories</Text>
          <Text style={styles.seeAllText}>View all</Text>
        </View>
        <FlatList
          horizontal
          data={categoryList}
          renderItem={renderItems}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.statusRawContainer}
        />
      </View>
      <FlatList
        horizontal
        data={offersList}
        renderItem={renderOfferItem}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.statusRawContainer}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.topGalleryView}>
          <Text style={styles.galleryText}>New Products</Text>
          <Text style={styles.seeAllText}>View all</Text>
        </View>
      </View>
      <FlatList
        data={galleryData}
        renderItem={renderGalleryItem}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productContainer}
      />
    </ScreenWrapper>
  );
};

export default Categories;
