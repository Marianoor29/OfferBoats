import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.azure,
    width: width(86),
    height: height(14),
    marginHorizontal: width(1),
    marginVertical: height(1),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: width(2),
  },
  price: {
    fontSize: width(3),
    color: AppColors.grey,
    marginBottom: height(1.5),
    marginTop: height(1),
  },
  userImage: {
    height: width(22.4),
    width: width(24.4),
    borderRadius: width(2),
  },
  artistName: {
    color: AppColors.white,
    fontSize: width(3.6),
    fontWeight: 'bold',
  },
  textContainer: {
    width: width(30),
    alignItems: 'flex-start',
    marginHorizontal: width(3),
    // backgroundColor:'red'
  },
  rightContainer: {
    width: width(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    width: width(6),
    height: width(6),
    borderRadius: width(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  btnStyle: {
    width: width(20),
    backgroundColor: AppColors.white,
    paddingVertical: height(0.8),
    borderRadius: width(2),
  },
  btnTextStyle: {
    fontSize: width(3),
    color: AppColors.blue,
  },
});

export default styles;
