import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  container: {
      width:width(90),
      // paddingHorizontal:width(5),
      paddingVertical:height(1),
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:AppColors.azure,
      marginBottom:height(1),
      borderRadius:width(2)
    },
    ImageStyle:{
      width:width(8),
      height:width(8),
      borderRadius:width(20),
      marginRight:width(3)
    }

  
});
export default styles;
