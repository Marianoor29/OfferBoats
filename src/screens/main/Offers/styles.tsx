import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';

export default StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  topGalleryView: {
    width: width(84),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(1),
    alignSelf: 'center',
  },
  galleryText: {
    fontSize: width(4),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: width(3),
    color: AppColors.grey,
  },
  statusRawContainer: {
    marginVertical: height(1),
  },
  productContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    width: width(94),
    alignSelf: 'center',
  },
});
