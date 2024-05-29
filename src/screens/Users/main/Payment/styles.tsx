import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    paddingVertical:height(1)
  },
  AddPaymentButton:{
    width:width(60),
    paddingVertical:height(0.9),
  },
  AddPaymentText:{
    fontSize:width(4)
  },
  PayPalButton:{
    marginTop:height(1),
    width:width(60),
    paddingVertical:height(0.9),
    backgroundColor:AppColors.inputWhite
  },
  PayPalText:{
    color:AppColors.yellow,
    fontSize:width(4)
  },
  cardRowStyle:{ 
    flexGrow: 0, 
    marginTop: height(3), 
    paddingLeft:width(3)
  }
  
});

export default styles;
