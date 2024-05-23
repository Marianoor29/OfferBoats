import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  topTitleText: {
    fontSize: width(4),
    color: AppColors.white,
    fontWeight: 'bold',
    marginTop: height(1),
  },
  totalAmountView: {
    width: width(40),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: height(2),
  },
  totalText: {
    fontSize: width(4),
    color: AppColors.grey,
    fontWeight: 'bold',
  },
  totalPriceText: {
    fontSize: width(4),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  bottomContainer: {
    alignItems: 'center',
    marginVertical: height(2),
  },
});
