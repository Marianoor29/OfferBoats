import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.azure,
        width:width(25),
        marginHorizontal:width(1),
        marginVertical:height(2),
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width(2),
    },
    text: {
        fontSize:width(5),
        color:AppColors.black
    },
    userImage:{
        height:width(10.4),
        width:width(10.4), 
    },
    artistName:{
        color:AppColors.black,
        fontSize:width(4),
        paddingHorizontal:width(2),
        paddingVertical:height(1),
        alignSelf:'center',
        fontWeight:'bold'
    },
    imageContainer:{
        width: width(14.5),
        height: width(14.5),
        alignItems:'center',
        justifyContent:'center',
    },
})

export default styles