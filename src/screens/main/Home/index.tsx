import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import {
  CreatePost,
  Header,
  PopularArtist,
  Post,
  ScreenWrapper,
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import { logo, postPicture, user } from '../../../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { width } from '../../../utils/Dimension';
import { artistData, postData } from '../../../utils/DummyData';

const Home = ({ navigation }: any) => {
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
      <View style={styles.container}></View>
    </ScreenWrapper>
  );
};

export default Home;
