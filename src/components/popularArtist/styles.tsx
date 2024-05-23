import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.azure,
    width: width(25),
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
    justifyContent: 'center',
    borderRadius: width(2),
  },
  text: {
    fontSize: width(5),
    color: AppColors.white,
  },
  userImage: {
    height: width(15.4),
    width: width(15.4),
    borderRadius: width(20),
  },
  artistName: {
    color: AppColors.white,
    fontSize: width(3),
    paddingHorizontal: width(2),
    alignSelf: 'center',
  },
  imageContainer: {
    width: width(16.5),
    height: width(16.5),
    borderRadius: width(20),
    borderWidth: width(0.5),
    borderColor: AppColors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
