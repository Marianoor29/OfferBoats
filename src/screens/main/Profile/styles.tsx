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
  coverImageStyle: {
    width: width(90),
    height: height(20),
    borderRadius: width(3),
  },
  profileImageStyle: {
    width: width(24),
    height: width(24),
    borderRadius: width(20),
    position: 'absolute',
    bottom: -height(2),
    left: width(4),
  },
  infoView: {
    width: width(80),
    height: height(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(2),
  },
  UserNameView: {
    width: width(50),
  },
  nameStyle: {
    fontSize: width(3.6),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  emailStyle: {
    fontSize: width(3.6),
    color: AppColors.grey,
  },
  editIconViewStyle: {
    alignSelf: 'flex-end',
    marginTop: height(1.5),
  },
  editButtonStyle: {
    width: width(20),
    borderRadius: width(2),
    paddingVertical: height(0.4),
  },
  editButtonText: {
    fontSize: width(3),
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
