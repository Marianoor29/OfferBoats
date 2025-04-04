import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  productContainer: {
    alignItems: 'center',
  },
  headingStyle:{
    marginHorizontal:width(5)
  }
});
