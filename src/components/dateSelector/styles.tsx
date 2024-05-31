import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    backgroundColor: AppColors.white,
    padding: width(3),
    borderRadius: width(2),
  },
  headerIconView:{
    width: width(8),
    height:width(8),
    backgroundColor:AppColors.grey + 50,
    borderRadius:width(20),
    alignItems:'center',
    justifyContent:'center',
    marginBottom:height(3),

  },
  datePickerView: {
    paddingHorizontal:width(3),
    paddingBottom:height(0.9),
    borderWidth: 1,
    borderRadius: width(2),
    borderColor: AppColors.grey,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: AppColors.blackShadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width(98),
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    padding: width(3),
  },
  confirmButton: {
    backgroundColor: AppColors.yellow,
    padding: width(3),
    borderRadius: width(2),
    marginTop: height(2),
  },
  navButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
