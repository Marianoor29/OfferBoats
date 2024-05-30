import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  featuresView:{
    width:width(90),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:height(1)
  },
  
});

export default styles;
