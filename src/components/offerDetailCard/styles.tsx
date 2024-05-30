import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    container: {
    width:width(80),
    backgroundColor:AppColors.white,
    alignItems:'center',
    borderRadius:width(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: width(3),
    elevation: 2,
    paddingVertical:height(1.5)
    },
    rowStyles:{
        width:width(70),
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:AppColors.grey,
        borderBottomWidth:width(0.1),
        paddingVertical:height(1.6)
    },
    smallText: {
        fontWeight:'bold',
        color:AppColors.black,
        fontSize:width(3.4),
      
      },
})

export default styles