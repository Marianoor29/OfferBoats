import React from 'react';
import { FlatList, View } from 'react-native';
import {
  NotificationBar,
  ScreenWrapper,
  SimpleHeader
} from '../../../components';
import { GallertList } from '../../../utils/DummyData';
import styles from './styles';
type FormValues = {
  email: string,
};

const Notification = ({ navigation }: any) => {
  const renderGalleryItems = ({ item }: any) => {
    return (
      <NotificationBar
        // source={item.source}
        // title={item.title}
        // caption={item.caption}
      />
    );
  };
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
      <FlatList
          data={GallertList}
          renderItem={renderGalleryItems}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          // contentContainerStyle={styles.productContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Notification;
