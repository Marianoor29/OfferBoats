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
  },
  nameViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    marginTop:height(1)
  },
  nameInputContainerStyle: {
    width: width(44),
  },
  nameInputTextStyle: {
    width: width(34),
  },
  signUpButtonStyle: {
    backgroundColor: AppColors.azure,
    marginTop:height(3)
  },
  footerStyle:{
    alignItems:'center',
    marginVertical:height(2)
  }
});

export default styles;
