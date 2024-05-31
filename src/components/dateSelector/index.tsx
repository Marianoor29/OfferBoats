import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import CalendarPicker, { DateCallbackHandler } from 'react-native-calendar-picker';
import styles from './styles';
import { LargeText, SmallText } from '../text';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface DatePickerModalProps {
  initialDate?: string | null;
  onDatesSelected: (dates: string) => void;
  disabledDates?: string[] | ((date: Date) => boolean);
}

const DateSelector = ({
  initialDate = null,
  onDatesSelected,
  disabledDates = [],
}:DatePickerModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate ? new Date(initialDate) : null);
  const calendarRef = useRef<any>(null);

  const handleDateSelect: DateCallbackHandler = (date) => {
    setSelectedDate(date);
  };

  const isDateDisabled = (date: Date) => {
    if (Array.isArray(disabledDates)) {
      return disabledDates.includes(date.toISOString().split('T')[0]);
    } else if (typeof disabledDates === 'function') {
      return disabledDates(date);
    }
    return false;
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onDatesSelected(selectedDate.toISOString());
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.datePickerView} onPress={() => setModalVisible(true)}>
        <SmallText size={3}>Date</SmallText>
        <LargeText size={4}>{selectedDate ? selectedDate.toDateString() : 'Select Date'}</LargeText>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setModalVisible(false)}
            style={styles.headerIconView}
          >
           <AntDesign name='close' size={width(4.6)} color={AppColors.black} />
          </TouchableOpacity>
            <View style={styles.navButtonsContainer}>
              <TouchableOpacity
                onPress={() => calendarRef.current.handleOnPressArrowLeft()}
              >
                <LargeText size={3} color={AppColors.black} >Prev</LargeText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => calendarRef.current.handleOnPressArrowRight()}
              >
                <LargeText size={3} color={AppColors.black}>Next</LargeText>
              </TouchableOpacity>
            </View>
            <CalendarPicker
              ref={calendarRef}
              onDateChange={handleDateSelect}
              selectedStartDate={selectedDate}
              allowRangeSelection={false}
              selectedDayTextColor={AppColors.white}
              todayBackgroundColor={AppColors.black}
              disabledDates={isDateDisabled}
              previousTitle=" "
              nextTitle=" "
              customDatesStyles={[
                {
                  date: selectedDate,
                  style: {
                    backgroundColor: AppColors.yellow,
                    borderRadius: width(20),
                  },
                  textStyle: {
                    color: AppColors.black,
                  },
                },
              ]}
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <SmallText color={AppColors.white} size={4} textAlign={'center'}>
                Confirm
              </SmallText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateSelector;
