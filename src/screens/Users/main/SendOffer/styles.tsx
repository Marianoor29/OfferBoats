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
  durationView:{
    width:width(85),
    paddingHorizontal:width(3),
    // paddingBottom:height(0.9),
    borderWidth: 1,
    borderRadius: width(2),
    borderColor: AppColors.grey,
  },
  durationInput:{
    color:AppColors.black,
    padding:0,
    fontSize:width(4),
    fontWeight:'bold'
  },
  membersView:{
    width:width(85),
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:height(3),
    alignItems:'center'
  },
  addView:{
    width:width(26),
    height:height(6),
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: width(2),
    borderColor: AppColors.grey,
  }
});
