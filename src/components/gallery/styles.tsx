import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(90),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: width(2),
    marginVertical:height(1)
  },
  coverImage:{
    width:width(90),
    height:width(70),
    borderRadius: width(2),
  },
  textContainer:{
    width: width(90),
    position:'absolute',
    bottom:height(1),
    paddingHorizontal:width(3),
    backgroundColor:AppColors.blackShadow
  }

});
