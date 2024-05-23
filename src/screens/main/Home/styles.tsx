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
  sellerView: {
    width: width(88),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
    marginTop: height(0.8),
  },
  topTitle: {
    color: AppColors.white,
    fontSize: width(3.4),
    fontWeight: 'bold',
  },
  topproductTitle: {
    color: AppColors.blue,
    fontSize: width(3.4),
    fontWeight: 'bold',
  },
  topTitleView: {
    width: width(42),
    height: width(8),
    backgroundColor: AppColors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  topproductView: {
    width: width(42),
    height: width(8),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  statusRawContainer: {
    flexDirection: 'row',
    marginHorizontal: width(1),
  },
});
