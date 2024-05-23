import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(23),
    marginHorizontal: width(1),
    // marginVertical:height(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOfItemsStyle: {
    fontSize: width(3),
    color: AppColors.grey,
    marginTop: height(1),
  },
  posterImage: {
    height: width(19.4),
    width: width(22.4),
    borderRadius: width(3),
  },
  categoryNameStyle: {
    color: AppColors.white,
    fontSize: width(3),
    paddingHorizontal: width(2),
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: height(1),
  },
});

export default styles;
