import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blue,
    width: width(100),
    paddingVertical: height(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomRightRadius: width(10),
    borderBottomLeftRadius: width(10),
  },
  emptyView: {
    width: width(25),
    paddingLeft: width(6),
  },
  logo: {
    width: width(40),
    height: width(10),
  },
  iconView: {
    width: width(25),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor:'red',
  },
});
export default styles;
