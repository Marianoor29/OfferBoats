import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(96),
    // height:height(60),
    paddingVertical: height(1),
    alignItems: 'center',
    borderColor: AppColors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: width(3),
    marginVertical: height(1),
  },
  userView: {
    width: width(92),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userDetailWrapper: {
    width: width(60),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    alignSelf: 'flex-start',
  },
  userName: {
    color: AppColors.white,
    fontSize: width(3),
  },
  time: {
    color: AppColors.white,
    fontSize: width(2),
  },
  caption: {
    color: AppColors.white,
    fontSize: width(3),
    width: width(86),
    marginTop: height(1),
  },
  userInfoView: {
    width: width(45),
  },
  userImage: {
    width: width(12),
    height: width(12),
    borderRadius: width(50),
  },
  postImage: {
    width: width(90),
    height: width(70),
    borderRadius: width(3),
    marginTop: height(1.5),
  },
  buttonStyle: {
    backgroundColor: AppColors.blue,
    width: width(20),
    alignItems: 'center',
    paddingVertical: height(0.5),
    borderRadius: width(1),
  },
  textStyle: {
    fontSize: width(3),
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollar: {
    fontSize: width(3.5),
    color: AppColors.blue,
    fontWeight: 'bold',
    marginRight: width(0.6),
  },
  orderView: {
    width: width(88),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height(1),
  },
  line: {
    width: width(90),
    backgroundColor: AppColors.grey,
    height: height(0.1),
    marginVertical: height(0.5),
  },
});
export default styles;
