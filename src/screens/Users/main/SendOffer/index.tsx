import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  DateSelector,
  LargeText,
  MediumText,
  ModalWrapper,
  ScreenWrapper,
  SimpleHeader,
  SmallText,
  TimeSelector
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import styles from './styles';
import LottieView from 'lottie-react-native';
import CommonStyles from '../../../../utils/CommonStyles';
import { ModalHandles } from '../../../../components/modalWrapper';

const SendOffer = ({ navigation }: any) => {
  const modalRef = useRef<ModalHandles>(null);
  const [numberOfMembers, setNumberOfMembers] = useState<number>(0); 
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const disabledDates = ['2024-06-01', '2024-06-02', '2024-06-03', '2024-06-04', '2024-06-05','2024-06-06', '2024-06-07', '2024-06-08', '2024-06-09', '2024-06-10'];
  const handleDatesSelected = (dates: string) => {
    console.log('Selected Date:', dates);
  }
  const handleTimeSelected = (time: string) => {
    setSelectedTime(time);
    // You can perform any additional logic here based on the selected time
  };

  const decreaseMembers = () => {
    if (numberOfMembers > 0) {
      setNumberOfMembers(numberOfMembers - 1);
    }
  };
 const sendOfferHandler = () => {
   modalRef?.current?.show()
 }
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4} textAlign={'center'}>Send a Booking Inquiry</LargeText>}
        />
      )}
      footerUnScrollable={() => (
        <Button
        text={'Send Offer'}
        buttonStyle={styles.footerBtnStyle}
        onPress={sendOfferHandler}
        />
      )}>
      <View style={styles.container}>
      <DateSelector
         onDatesSelected={handleDatesSelected}
         disabledDates={disabledDates}
      />
        <TimeSelector initialTime="08:00 AM" onTimeSelected={handleTimeSelected} />
       <View  style={styles.durationView}>
        <SmallText size={3}>Duration</SmallText>
        <TextInput
        placeholder='Enter Duration'
        placeholderTextColor={AppColors.black}
        style={styles.durationInput}
        keyboardType='numeric'
        />
        </View>
        <View  style={styles.durationView}>
        <SmallText size={3}>Budget</SmallText>
        <TextInput
        placeholder='Enter your Budget'
        placeholderTextColor={AppColors.black}
        style={styles.durationInput}
        keyboardType='numeric'
        />
        </View>
        <View style={styles.membersView}>
          <TouchableOpacity style={styles.addView} onPress={() => setNumberOfMembers(numberOfMembers + 1)}>
          <AntDesign name="plus" size={width(5)} color={AppColors.black} />
          </TouchableOpacity>
          <LargeText size={4}>{numberOfMembers} Members</LargeText>
          <TouchableOpacity style={styles.addView} onPress={decreaseMembers}>
          <AntDesign name="minus" size={width(5)} color={AppColors.black} />
          </TouchableOpacity>
        </View>
        <ModalWrapper
          ref={modalRef}
          onClose={() => modalRef?.current?.hide()}
          children={
            <>
              <LottieView source={require('../../../../assets/gif/tick.json')} style={styles.animatedImageStyle} autoPlay loop={false} />
              <MediumText textAlign="center" textStyles={CommonStyles.marginBottom_2} >Your offer is successfully {'\n'} sent to the owner</MediumText>
              <Button
              text='CONTINUE'
              onPress={() => {
                modalRef?.current?.hide()
                setTimeout(() => {
                  navigation.goBack()
                }, 600);
              }}
            />
            </>
          }
        />
        </View>
    </ScreenWrapper>
  );
};

export default SendOffer;
