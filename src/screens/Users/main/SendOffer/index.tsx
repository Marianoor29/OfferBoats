import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  DateSelector,
  LargeText,
  ScreenWrapper,
  SimpleHeader,
  SmallText,
  TimeSelector
} from '../../../../components';
import AppColors from '../../../../utils/AppColors';
import { width } from '../../../../utils/Dimension';
import styles from './styles';

const SendOffer = ({ navigation }: any) => {
  const [numberOfMembers, setNumberOfMembers] = useState<number>(0); 
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const disabledDates = ['2024-06-01', '2024-06-02', '2024-06-03', '2024-06-04', '2024-06-05'];
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

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4} textAlign={'center'}>Send a Booking Inquiry</LargeText>}
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
        <View style={styles.membersView}>
          <TouchableOpacity style={styles.addView} onPress={() => setNumberOfMembers(numberOfMembers + 1)}>
          <AntDesign name="plus" size={width(5)} color={AppColors.black} />
          </TouchableOpacity>
          <LargeText size={4}>{numberOfMembers} Members</LargeText>
          <TouchableOpacity style={styles.addView} onPress={decreaseMembers}>
          <AntDesign name="minus" size={width(5)} color={AppColors.black} />
          </TouchableOpacity>
        </View>
        </View>
    </ScreenWrapper>
  );
};

export default SendOffer;
