import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height } from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  scroll: {
    flex: 1,
    paddingBottom: height(1.5),
  },
  contentContainer: {},
});
export default styles;
