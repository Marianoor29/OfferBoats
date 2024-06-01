import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { logo, logoHat } from '../../../../assets/images';
import {
  Header,
  HeaderTab,
  ScreenWrapper,
  TripOrders
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import { orderData } from '../../../../utils/DummyData';
import { ORDER_STATUSES } from '../../../../utils/enum';
import ScreenNames from '../../../../navigation/routes';
import styles from './styles';

const Trip = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const tabs = [
    { id: 1, name: "Current Trips" },
    { id: 2, name: "Previous Trips" },
  ];
  const [selectedTopTab, setSelectedTopTab] = useState("Current Trips");
  const [currentTabArray, setCurrenttabArray] = useState(
    orderData.filter(
      (item) =>
        item.status !== ORDER_STATUSES.CANCELLED &&
        item.status !== ORDER_STATUSES.COMPLETED
    )
  );
  const onPressTab = (state) => {
    setSelectedTopTab(state);
    if (state === "Current Trips") {
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
  const onPressDecline = () =>{}
  const renderItem = ({ item }) => {
    return (
      <TripOrders
        date={item.date}
        ownerName={item.ownerName}
        address={item.address}
        price={item.price}
        tripTitle={item.tripTitle}
        image={item.image}
        statusView={item.status}
        onPressDecline={onPressDecline}
        onPressDetails={() => navigation.navigate(ScreenNames.TRIPDETAILS,{trip : item})}
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
