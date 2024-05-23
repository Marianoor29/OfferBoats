import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
    modalContainer: {
      justifyContent: "flex-end",
      padding: 0,
      margin: 0,
    },
    modalInnerContainer: {
      backgroundColor: AppColors.white,
      elevation: 5,
      borderRadius: width(6),
      paddingVertical: height(1),
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: width(2),
    },
    topView:{
      width:width(8),
      height:width(8),
      alignSelf:'flex-start',
    },
  modalHeaderView:{
    width:width(90),
    alignItems:'center',
    paddingVertical:height(1),
  },
  modalMainView:{
    width:width(90),
    alignItems:'center',
    justifyContent:'space-between',
  },
  button:{
    marginVertical:height(2),
  }
  
});
export default styles;
