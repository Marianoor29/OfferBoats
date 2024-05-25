import { yupResolver } from '@hookform/resolvers/yup';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  Gallery,
  Header,
  InputField,
  LargeText,
  MediumText,
  ModalWrapper,
  NotificationBar,
  ScreenWrapper,
  SmallText
} from '../../../components';
import { ModalHandles } from '../../../components/modalWrapper';
import AppColors from '../../../utils/AppColors';
import CommonStyles from '../../../utils/CommonStyles';
import { width } from '../../../utils/Dimension';
import { ForgotPasswordSchema } from '../../../utils/validationSchemas';
import styles from './styles';
import { GallertList } from '../../../utils/DummyData';
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
      headerUnScrollable={() => {
        return (
          <Header
            onPressFirstIcon={() => navigation.goBack()}
            firstIcon={<AntDesign name={'left'} size={width(5)} color={AppColors.blue} />}
          />
        )
      }}>
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
