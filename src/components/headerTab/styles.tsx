import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: AppColors.blue,
    width: width(100),
    paddingVertical:height(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(8),
    alignItems: "center",
  },
  BtnContainer: {
    width: width(40),
    height: height(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2),
    backgroundColor: AppColors.yellow,
    alignSelf: 'center',
    paddingVertical: height(1),
  },
  BtnText:{
    
  }

});
export default styles;
