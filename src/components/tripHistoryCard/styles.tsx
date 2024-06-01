import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  mainView: {
    paddingVertical: height(1.8),
    paddingHorizontal: width(3.5),
    width: width(90),
    borderRadius: width(3),
    marginVertical: height(0.5),
    backgroundColor:AppColors.white,
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 3,

  },
  innerView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width(56),
  },
  image: {
    width: width(10.6),
    height: width(10.6),
    marginRight: width(2),
    borderRadius: width(10),
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width(68),
  },
  textStyles: {
    marginLeft: width(1.5),
    width: width(80),
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(1.5),
  },
  btn: {
    elevation: 0,
    width: width(82),
    backgroundColor: AppColors.blue,
  },
  btnCancel: {
    backgroundColor: AppColors.greenyellow,
    elevation: 0,
    width: width(82),
    // backgroundColor: AppColors.secondary,
  },
  btn1: {
    width: width(40),
    elevation: 0,
  },
  statusView: {
    paddingHorizontal: width(3),
    paddingVertical: height(0.8),
    borderRadius: width(5),
    alignSelf: "flex-start",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height(2),
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  service: {
    width: width(40),
  },
  serviceDescription: {
    width: width(40),
  },
  btnTextProgress: {
    color: AppColors.white,
  },
  btnTextCancel: {
    color: AppColors.white,
    fontSize:width(3.6)
  },
  CancelContainer: {
    width: width(40),
    backgroundColor: AppColors.red,
    paddingVertical: height(0.7),
  },
  DetailsBtn: {
    width: width(40),
    backgroundColor: AppColors.yellow,
    paddingVertical: height(0.7),
  },
  DetailsBtnContainer: {
    width: width(80),
    backgroundColor: AppColors.yellow,
    paddingVertical: height(0.7),
    alignSelf:'center'
  },
  priceContainer: {
    width: width(15),
  },
});
export default styles;
