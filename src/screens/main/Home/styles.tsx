import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:width(5),
    backgroundColor: AppColors.white,
  },
  productContainer: {
    alignItems: 'center',
  },
});
