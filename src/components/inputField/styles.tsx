import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:AppColors.inputWhite,
    borderRadius:width(3),
    padding:width(2),
    width:width(90),
    flexDirection:'row',
    // marginTop:height(0.5)
  },
  titleStyle:{
    fontSize:width(3.3),
    color:AppColors.black,
    paddingLeft:width(2),
    fontWeight:'500'
  },
  container: {
    width: width(76),
    marginLeft: width(1),
  },
  input: {
    color:AppColors.black,
    fontSize:width(3.8),
    paddingBottom:width(0.1),
    marginHorizontal:width(1),
    paddingTop:0,
  },
  iconStyle:{
    height:height(5),
    width:width(7),
    justifyContent:'center',
    alignSelf:'flex-end',
  },
  errorView: {
    alignSelf: 'flex-start',
    marginLeft: width(9),
    marginVertical: height(0.5),
  },
  errorText: {
    fontSize: width(3),
    color: AppColors.red,
  },
});

export default styles;
