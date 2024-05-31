import { StyleSheet } from 'react-native';
import AppColors from '../../../../utils/AppColors';
import { height, width } from '../../../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    paddingVertical:height(1)
  },
  searchView:{
    width:width(98),
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'space-between',
    backgroundColor:AppColors.inputWhite,
    borderRadius: width(4),
    paddingHorizontal: width(3),
  },
  iconView: {
    width: width(8),
    height:width(8),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:AppColors.white,
    borderRadius:width(20)
  },
  searchBar: {
    width:width(78),
    height:height(6),
    color:AppColors.black,
    paddingHorizontal: width(3),
  },
  heading: {
    width:width(90),
    marginVertical: height(2),
  },
  item: {
    width:width(90),
    paddingBottom: width(3),
  },
  placesItem: {
    width:width(90),
    paddingBottom: width(3),
    flexDirection:'row'
  },

  
});

export default styles;
