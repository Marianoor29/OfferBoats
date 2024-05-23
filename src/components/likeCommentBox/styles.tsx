import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  likeCommentContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  likeImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(84),
    alignItems: 'center',
    paddingVertical: height(0.5),
  },
  commentTextStyle: {
    fontSize: width(2.4),
    color: AppColors.grey,
    width: width(16),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width(88),
    paddingVertical: height(0.5),
  },
  iconViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconTextStyle: {
    color: AppColors.white,
    paddingLeft: height(1),
    fontSize: width(3.3),
  },
  lineView: {
    width: width(90),
    backgroundColor: AppColors.grey,
    height: height(0.1),
    alignSelf: 'center',
    marginVertical: height(0.7),
  },
  user1ImagesStyle: {
    width: width(8),
    height: width(8),
    borderRadius: width(8),
  },
  commentViewContainer: {
    width: width(88),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(1),
  },
  commentView: {
    paddingHorizontal: width(2.5),
    paddingVertical: height(1),
    width: width(78),
    backgroundColor: AppColors.azure,
    borderRadius: width(3),
  },
  commentStyle: {
    fontSize: width(3),
    color: AppColors.white,
  },
  timeAndIconView: {
    flexDirection: 'row',
    width: width(14),
    justifyContent: 'space-between',
  },
  timeTextStyle: {
    color: AppColors.grey,
    fontSize: width(2.8),
    width: width(6),
  },
  nameAndTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height(1),
  },
  commentBoxContainer: {
    width: width(88),
    alignSelf: 'center',
    paddingRight: width(4),
  },
  commentBoxStyle: {
    height: height(6),
    width: width(88),
    borderColor: AppColors.grey,
    borderWidth: width(0.2),
    borderRadius: width(4),
    paddingHorizontal: width(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreCommentText: {
    marginVertical: height(0.8),
    color: AppColors.blue,
    fontSize: width(3),
    marginLeft: width(12),
  },
  inputStyle: {
    width: width(70),
    color: AppColors.white,
  },
  sendIconStyle: {
    width: width(9),
  },
  gameBtnStyle: {
    width: width(18),
    paddingVertical: height(0.4),
    shadowColor: AppColors.white,
    marginLeft: width(3),
    backgroundColor: AppColors.white,
    marginBottom: height(1),
  },
  viewBtnStyle: {
    width: width(18),
    paddingVertical: height(0.4),
    shadowColor: AppColors.white,
    marginLeft: width(3),
    marginBottom: height(1),
  },
  btntextStyle: {
    fontSize: width(3),
  },
  otherLikedTextView: {
    width: width(35),
    marginRight: width(2),
  },
  commentTextView: {
    width: width(25),
    alignItems: 'flex-end',
  },
});

export default styles;
