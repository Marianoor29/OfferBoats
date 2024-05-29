import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

export default StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    width: width(100),
    paddingHorizontal:width(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:height(1),
    backgroundColor: AppColors.azure,
    paddingVertical:height(1.5)
  },
  image: {
    width: width(100),
    height: height(30),
    resizeMode: 'cover',
  },
  boatOwnerImage: {
    alignSelf:'flex-start',
    width: width(10),
    height: width(10),
    borderRadius: width(30)
  },
  addressAndTitleView:{
       width:width(56),
  },
  title: {
    // backgroundColor:'green',
    width:width(46),
    marginHorizontal:width(2)
  },
  rightTopView:{
    alignSelf:'flex-start',
    width:width(26),
  },
  description:{
    width:width(90),
  },
  smallText: {
    fontWeight:'bold',
    color:AppColors.yellow,
    fontSize:width(3.4)
  },
  lineView:{
    width:width(90),
    backgroundColor:AppColors.grey,
    height:height(0.1),
    marginVertical:height(1)
  },
  bottomView:{
    width:width(90),
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:height(2)
  },
  acceptBtnStyle:{
    width:width(40),
    paddingVertical:height(1),
    borderRadius:width(2)
  },
  btnTextStyle:{
    fontSize:width(4)
  },
  modalHeading:{
    marginBottom:height(2)
  }
});
