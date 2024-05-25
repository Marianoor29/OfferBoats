import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    paddingVertical:height(1),
    marginBottom:height(0.2),
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:AppColors.white,

  },
  coverImageStyle: {
    width: width(90),
    height: height(20),
    borderRadius: width(2),
  },
  profileImageStyle: {
    width: width(24),
    height: width(24),
    borderRadius: width(20),
    position: 'absolute',
    bottom: -height(2),
    left: width(4),
    borderWidth:width(0.4),
    borderColor:AppColors.white
  },
  infoView: {
    width: width(86),
    height: height(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(2),
  },
  UserNameView: {
    width: width(56),
  
  },
  nameStyle: {
    fontSize: width(3.6),
    color: AppColors.black,
    fontWeight: 'bold',
  },
  emailStyle: {
    fontSize: width(3.6),
    color: AppColors.grey,
  },
  editIconViewStyle: {
    alignSelf: 'flex-end',
    marginTop: height(1.5),
  },
  editButtonStyle: {
    width: width(20),
    borderRadius: width(2),
    paddingVertical: height(0.4),
  },
  editButtonText: {
    fontSize: width(3),
  },
  tripText:{
    width:width(30),
  },
  Ratingcontainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize:width(3)
  },
  starsContainer: {
    flexDirection: 'row',
  },
});
export default styles;
