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
    color: AppColors.black,
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
});
