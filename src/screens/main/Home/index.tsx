import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo } from '../../../assets/images';
import {
  Header,
  LargeText,
  ScreenWrapper
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import { width } from '../../../utils/Dimension';
import styles from './styles';

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
      <LargeText>Home Screen</LargeText>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
