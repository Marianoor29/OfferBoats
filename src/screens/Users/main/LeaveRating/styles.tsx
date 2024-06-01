import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.transparent,
    paddingVertical:height(3)
  },
  reviewContainer:{
    width:width(80),
    borderRadius:width(2),
    backgroundColor:AppColors.inputWhite,
    marginTop:height(2),
    marginBottom:height(5),
    color:AppColors.black
  },
  footerBtnStyle:{
    alignSelf:'center',
    marginBottom:height(2)
  },
  animatedImageStyle: {
    height: width(20),
    width:width(20),
  },
});

export default styles;
