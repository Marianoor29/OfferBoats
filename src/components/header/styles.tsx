import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    paddingVertical:height(1),
    marginBottom:height(0.2),
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:AppColors.white,
    shadowColor: AppColors.yellow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,

  },
  emptyView: {
    width: width(25),
    paddingLeft: width(6),
  },
  logo: {
    width: width(30),
    height: width(10),
  },
  iconView: {
    width: width(25),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default styles;
