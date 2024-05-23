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
  title: {
    fontSize: height(3),
    color: AppColors.white,
    fontWeight: 'bold',
    marginBottom: height(4),
  },
  forgortPass: {
    fontSize: height(2),
    color: AppColors.blue,
    marginBottom: height(2),
    alignSelf: 'flex-end',
    marginRight: width(4),
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: height(2),
    color: AppColors.grey,
    marginTop: height(2),
    marginBottom: height(2),
  },
  socialBtnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width:width(50),
    // alignSelf:'center'
  },
  linkedIn: {
    width: width(8),
    height: width(8),
  },
  logo: {
    width: width(80),
    height: width(40),
    marginTop:height(10)
  },
  signUpButtonStyle: {
    backgroundColor: AppColors.azure,
  },
});

export default styles;
