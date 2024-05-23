import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  CategoryBox,
  GalleryCard,
  Header,
  LargeText,
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
            <AntDesign name="search1" size={width(5)} color={AppColors.yellow} />
          }
          icon2={
            <Octicons name="bell-fill" size={width(5)} color={AppColors.yellow} />
          }
          firstIcon={
            <Octicons name="filter" size={width(5)} color={AppColors.yellow} />
          }
        />
      )}>
      <View style={styles.container}>
      <LargeText>Offers Screen</LargeText>
        {/* <View style={styles.topGalleryView}>
          <Text style={styles.galleryText}>Categories</Text>
          <Text style={styles.seeAllText}>View all</Text>
        </View> */}
        {/* <FlatList
          horizontal
          data={categoryList}
          renderItem={renderItems}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.statusRawContainer}
        />
     */}
      {/* <FlatList
        horizontal
        data={offersList}
        renderItem={renderOfferItem}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.statusRawContainer}
      /> */}

      {/* <View style={styles.bottomContainer}>
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
      /> */}
        </View>
    </ScreenWrapper>
  );
};

export default Categories;
