import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: AppColors.transparent,
    position: "absolute",
    zIndex: 1000,
    shadowColor: AppColors.transparent,
    width: '100%',
    top: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.transparent,
  },
  headerIconView:{
    width: width(8),
    height:width(8),
    backgroundColor:AppColors.blackShadow,
    borderRadius:width(20),
    alignItems:'center',
    justifyContent:'center',
    marginTop:height(3),
    marginLeft:width(3)

  },
  innerContainer: {
    flexDirection: 'row',
    width: width(100),
    paddingHorizontal:width(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:height(1),
    paddingVertical:height(1.5),
  },
  image: {
    width: '100%',
    height: height(30),
    resizeMode: 'cover',
    backgroundColor: AppColors.transparent,
  },
  boatOwnerImage: {
    alignSelf:'flex-start',
    width: width(10),
    height: width(10),
    borderRadius: width(30)
  },
  addressAndTitleView:{
       width:width(80),
  },
  title: {
    width:width(80),
  },
  descriptionView:{
    width:width(90),
    marginVertical:height(2)
  },
  lineView:{
    width:width(90),
    backgroundColor:AppColors.grey,
    height:width(0.1),
    marginVertical:height(3)
  },
  bottomView:{
    width:width(90),
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:height(2),
    alignSelf:'center'
  },
  acceptBtnStyle:{
    width:width(45),
    paddingVertical:height(1),
    borderRadius:width(2)
  },
  btnTextStyle:{
    fontSize:width(4)
  },
  modalHeading:{
    marginBottom:height(2)
  },
  buttonsView:{
    width:width(65),
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:height(1)
  },
  modalButtonStyle:{
    width:width(30),
    paddingVertical:height(0.7)
  },
  acceptofferModal:{
    justifyContent:'center',
    width:width(78),
    alignSelf:'center'
  },
  readMoreText:{
    color:AppColors.yellow,
    width:width(90)
  },
  featuresView:{
    width:width(90),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:height(1)
  },
  headingStyle:{
    width:width(90),
    marginBottom:height(1)
  },
  reviewHeadingView:{
    width:width(90),
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:height(2),
    alignItems:'center'
  }
});
