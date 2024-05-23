import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';

const styles = StyleSheet.create({
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width(28),
    // backgroundColor:'red'
  },
  icon1: {
    height: height(5),
    width: height(3.5),
  },
  icon2: {
    height: height(5.5),
    width: height(3.5),
  },
  icon3: {
    height: height(4),
    width: height(4),
  },
});

export default styles;
