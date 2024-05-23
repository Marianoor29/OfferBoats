import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(94),
    alignItems: 'center',
    borderRadius: width(4),
    paddingHorizontal: width(2),
    paddingVertical: height(1.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: height(1),
  },
  postViewStyle: {
    width: width(88),
    borderColor: AppColors.grey,
    borderWidth: width(0.4),
    borderRadius: width(8),
    alignItems: 'center',
    paddingVertical: height(0.2),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userImageStyle: {
    width: width(11),
    height: width(11),
    borderRadius: width(13),
    marginLeft: width(1),
  },
  btnStyle: {
    width: width(20),
    paddingVertical: height(0.5),
    marginRight: width(2.4),
  },
  postButtonText: {
    fontSize: width(3.5),
  },
  inputStyle: {
    width: width(45),
    color: AppColors.white,
    marginLeft: width(2.5),
  },
  ChoosePhotosViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(83),
    paddingTop: height(2),
    paddingBottom: height(1),
    // backgroundColor:'red'
  },
  textStyle: {
    color: AppColors.grey,
    fontSize: width(2.8),
    marginLeft: width(1.5),
  },
});

export default styles;
