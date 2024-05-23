/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  animatedImageStyle: {
    height: width(60),
    width: width(60),
  },
  forgortPass: {
    fontSize: height(2),
    color: AppColors.blue,
    marginBottom: height(2),
    alignSelf: 'flex-end',
    marginRight: width(4),
    fontWeight: 'bold',
  },
  forgotPassTextStyle:{
    alignSelf:'flex-end',
    marginBottom:height(2),
    width:width(90)
  },
  signInButtonStyle:{
    marginBottom:height(2)
  },
  socialBtnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   marginVertical:height(3)
  },
  linkedIn: {
    width: width(8),
    height: width(8),
  },
  logo: {
    width: width(60),
    height: width(40),
    marginVertical:height(4)
  },
  signUpButtonStyle: {
    backgroundColor: AppColors.inputWhite,
    marginTop:height(4)
  },
});

export default styles;
