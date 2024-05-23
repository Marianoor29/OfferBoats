import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.chocolate,
    width: width(74),
    height: height(17),
    marginHorizontal: width(1),
    marginVertical: height(1.4),
    paddingHorizontal: width(4),
    paddingVertical: height(1.4),
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  numberOfItemsStyle: {
    fontSize: width(3),
    color: AppColors.white,
    marginTop: height(0.3),
    marginBottom: height(1),
    marginLeft: width(2),
  },
  posterImage: {
    height: width(28.4),
    width: width(28.4),
    borderRadius: width(2),
    alignSelf: 'flex-end',
  },
  categoryNameStyle: {
    color: AppColors.white,
    fontSize: width(4),
    paddingHorizontal: width(2),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: height(1),
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
