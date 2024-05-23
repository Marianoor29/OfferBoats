import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import {
  Button,
  GalleryCard,
  Header,
  LargeText,
  ScreenWrapper,
} from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import AppColors from '../../../utils/AppColors';
import { width } from '../../../utils/Dimension';
import { logo, user } from '../../../assets/images';
import { galleryData } from '../../../utils/DummyData';

const Profile = ({ navigation }: any) => {
  const renderGalleryItem = ({ item }: any) => {
    return <GalleryCard uri={item.uri} title={item.title} price={item.price} />;
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
      <LargeText>Trips Screen</LargeText>
    
      {/* <View style={styles.galleryView}>
      <View style={styles.topGalleryView}>
        <Text style={styles.galleryText}>Gallery</Text>
        <Text style={styles.seeAllText}>See all</Text>
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

export default Profile;
