import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(92),
    backgroundColor: AppColors.white,
    borderColor: AppColors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: width(3),
    marginVertical: height(0.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: width(3),
    paddingVertical: height(1),
  },
  text: {
    fontSize: width(3.5),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  price: {
    fontSize: width(3),
    color: AppColors.white,
    fontWeight: 'bold',
  },
  coverImageStyle: {
    width: width(22),
    height: width(22),
    borderRadius: width(3),
  },
  detailView: {
    width: width(60),
  },
  editButtonStyle: {
    width: width(20),
    borderRadius: width(2),
    paddingVertical: height(0.4),
    marginTop: height(1),
  },
  editButtonText: {
    fontSize: width(3),
  },
});

export default styles;
