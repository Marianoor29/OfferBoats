import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height(1),
    paddingBottom: height(2),
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
  galleryView: {
    width: width(98),
    backgroundColor: AppColors.white,
    borderColor: AppColors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: width(6),
    marginVertical: height(1),
    alignItems: 'center',
  },
  topGalleryView: {
    width: width(84),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(1),
    alignItems: 'center',
    alignSelf: 'center',
  },
  productContainer: {
    alignItems: 'center',
  },
});
