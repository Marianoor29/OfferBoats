import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import { LargeText, SmallText } from '../text';
import AppColors from '../../utils/AppColors';

interface TimePickerModalProps {
  initialTime?: string | null;
  onTimeSelected: (time: string) => void;
}

const TimeSelector: React.FC<TimePickerModalProps> = ({
  initialTime = null,
  onTimeSelected,
}) => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(
    initialTime ? new Date(initialTime) : null
  );
console.log(initialTime, 'initialTime')
  const handleConfirm = (time: Date) => {
    setSelectedTime(time);
    onTimeSelected(formatTime(time)); // Format the time before passing it to the callback
    setTimePickerVisible(false);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  // Function to format the time with AM/PM indicator
  const formatTime = (time: Date | null): string => {
    if (time !== null && !isNaN(time.getTime())) {
      return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    } else {
      return 'Select Time';
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.timePickerView} onPress={showTimePicker}>
        <SmallText size={3}>Time</SmallText>
        <LargeText size={4}>
          {selectedTime ? formatTime(selectedTime) : 'Select Time'}
        </LargeText>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        is24Hour={false} // Set to true if you want 24-hour format
      />
    </View>
  );
};

export default TimeSelector;
