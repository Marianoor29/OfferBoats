import { StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors';
import { height, width } from '../../../utils/Dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  ImagesView:{
    height:height(30)
  },
  coverPhoto:{
    width:width(100),
    height:height(20),
  },
  cameraIconTopView:{
    width:width(100),
    height:height(20),
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:AppColors.blackShadow
  },
  userImage:{
    width:width(30),
    height:width(30),
    position:'absolute',
    bottom:height(3),
    alignSelf:'center',
    borderRadius:width(30),
  },
  cameraIconView:{
    width:width(30),
    height:width(30),
    position:'absolute',
    bottom:height(3),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:width(30),
    backgroundColor:AppColors.blackShadow
  },
  nameViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    marginTop:height(1)
  },
  nameInputContainerStyle: {
    width: width(44),
  },
  nameInputTextStyle: {
    width: width(34),
  },
});
