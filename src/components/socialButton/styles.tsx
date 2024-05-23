import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(10),
    backgroundColor: AppColors.white,
    width: width(13),
    height: width(13),
    marginVertical: height(1),
    marginHorizontal: width(2),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.8),
  },
  iconStyle: {
    height: width(11),
    width: width(11),
  },
});
export default styles;
