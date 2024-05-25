import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

export default StyleSheet.create({
  container: {
    width: width(40),
    height:height(20),
    paddingVertical: height(3),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: width(3),
  },
  text: {
    color: AppColors.yellow,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: 'bold',
  },
});
