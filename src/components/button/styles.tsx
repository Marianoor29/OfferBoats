import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: AppColors.yellow,
    width: width(80),
    alignItems: 'center',
    paddingVertical: height(1.6),
    borderRadius: width(2),
  },
  text: {
    fontSize: width(4),
    color: AppColors.white,
    fontWeight: 'bold',
  },
});
