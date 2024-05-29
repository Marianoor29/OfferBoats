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

  nameContainerStyle: {
    width: width(30),
  },
  nameTextinputStyle: {
    width: width(38),
  },
  errorView: {
    width: width(40),
    marginLeft: width(2),

  },
  modalHeaderView:{
    width:width(90),
    alignItems:'center',
    paddingVertical:height(1),
    flexDirection:'row',
  },
  modalHeading:{
    marginLeft:width(25),
    color:AppColors.black,
    fontSize:width(4),
    fontWeight:'bold',
  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:width(90)
  },
  button:{
    marginVertical:height(2),
    width:width(60),
    paddingVertical:height(0.9)
  },
  nameInputContainerStyle: {
    width: width(44),
  },
  nameInputTextStyle: {
    width: width(34),
  },
  
});
export default styles;
