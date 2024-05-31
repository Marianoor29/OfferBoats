import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  lg: {
    height: height(16),
    width: width(96),
    borderRadius: width(2),
    marginBottom: height(1),
    backgroundColor:AppColors.inputWhite,
    justifyContent:'center',
    marginHorizontal:width(2)
  },
  cardSelectedStyle:{
    borderWidth:width(0.2),
    borderColor:AppColors.yellow,
  },
  cc: {
    height: height(16),
    borderRadius: width(4.5),
    paddingHorizontal: width(4),
    paddingVertical: width(2.5),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(0.5),
  },
  nameText: {
    fontSize: width(3.8),
    color: AppColors.black,
    fontWeight:'bold'
  },
  ccText: {
    fontSize: width(3.8),
    color: AppColors.black,
    marginTop: height(0.3),
  },
  cardNumberText: {
    fontSize: width(5),
    color: AppColors.black,
    marginTop: height(0.3),
  },
  expiryText: {
    fontSize: width(2.4),
    color: AppColors.black + 95,
  },
  dateText: {
    fontSize: width(3.3),
    color: AppColors.black,
    marginTop: height(0.4),
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: height(1),
  },
  image: {
    width: width(12),
    height: width(7.4),
  },
});
export default styles;
