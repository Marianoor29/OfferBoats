import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  lg: {
    height: height(23),
    width: width(85.5),
    borderRadius: width(4.5),
    marginBottom: height(1.7),
    backgroundColor:AppColors.cornflowerblue,
    justifyContent:'center'
  },
  cardSelectedStyle:{
    backgroundColor:AppColors.cornflowerblue + 50,
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
    color: AppColors.white,
    fontWeight:'bold'
  },
  ccText: {
    fontSize: width(3.8),
    color: AppColors.white,
    marginTop: height(0.3),
  },
  cardNumberText: {
    fontSize: width(5),
    color: AppColors.white,
    marginTop: height(0.3),
  },
  expiryText: {
    fontSize: width(2.4),
    color: AppColors.white + 95,
  },
  dateText: {
    fontSize: width(3.3),
    color: AppColors.white,
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
