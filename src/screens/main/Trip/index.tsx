import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo, logoHat } from '../../../assets/images';
import {
  Header,
  HeaderTab,
  ScreenWrapper,
  TripOrders
} from '../../../components';
import AppColors from '../../../utils/AppColors';
import { width } from '../../../utils/Dimension';
import { orderData } from '../../../utils/DummyData';
import { ORDER_STATUSES } from '../../../utils/enum';
import styles from './styles';

const Trip = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const tabs = [
    { id: 1, name: "Current" },
    { id: 2, name: "Previous" },
  ];
  const [selectedTopTab, setSelectedTopTab] = useState("Current");
  const [currentTabArray, setCurrenttabArray] = useState(
    orderData.filter(
      (item) =>
        item.status !== ORDER_STATUSES.CANCELLED &&
        item.status !== ORDER_STATUSES.COMPLETED
    )
  );
  const onPressTab = (state) => {
    setSelectedTopTab(state);
    if (state === "Current") {
      setCurrenttabArray(
        orderData.filter(
          (item) =>
            item.status !== ORDER_STATUSES.CANCELLED &&
            item.status !== ORDER_STATUSES.COMPLETED
        )
      );
    } else {
      setCurrenttabArray(
        orderData.filter(
          (item) =>
            item.status == ORDER_STATUSES.CANCELLED ||
            item.status === ORDER_STATUSES.COMPLETED
        )
      );
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TripOrders
        date={item.date}
        serviceName={item.serviceName}
        serviceDesc={item.serviceDesc}
        address={item.address}
        price={item.price}
        image={logoHat}
        statusView={item.status}
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
        <HeaderTab
          tabs={tabs}
          selectedTopTab={selectedTopTab}
          onPress={onPressTab}
        />
        <View style={{ paddingBottom: tabBarHeight, width: width(100) }}>
          <FlatList
            data={currentTabArray}
            contentContainerStyle={styles.flatList}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
            scrollEnabled={false}
            key={"_"}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Trip;
