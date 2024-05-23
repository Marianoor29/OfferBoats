import { Platform, StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? height(7) : height(8),
    backgroundColor: AppColors.blue,
    borderTopColor: AppColors.white,
    borderTopWidth: width(0.3),
    borderTopRightRadius: width(7),
    borderTopLeftRadius: width(7),
  },
  tabItemsStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(18),
    height: '100%',
  },
  bottomTabIndicator: {
    position: 'absolute',
    top: 0,
    height: height(0.6),
    width: width(16),
    borderBottomEndRadius: width(5),
    borderBottomStartRadius: width(5),
  },
  userImageStyle: {
    width: width(7),
    height: width(7),
    borderRadius: width(9),
  },
  tabBage: {},
});

export default styles;
