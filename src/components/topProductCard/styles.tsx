import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        width: width(90),
        marginHorizontal: width(1),
        marginBottom: height(1.4),
        borderRadius: width(2),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    numberOfItemsStyle: {
        fontSize: width(3),
        color: AppColors.grey,
        marginTop: height(0.3),
        marginBottom: height(1),
        marginLeft: width(2)
    },
    posterImage: {
        height: width(40),
        width: width(90),
        borderTopLeftRadius:width(1),
        borderTopRightRadius:width(1)
    },
    categoryNameStyle: {
        width:width(60),
        color: AppColors.black,
        fontSize: width(4),
        paddingHorizontal: width(2),
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginTop: height(1)
    },
    btnStyle: {
        backgroundColor: AppColors.blackShadow,
        paddingVertical: height(0.8),
        paddingHorizontal:width(2),
        borderRadius: width(8),
        position:'absolute',
        bottom:height(8),
        right:width(5)
    },
    btnTextStyle: {
        fontSize: width(3),
        color: AppColors.white
    },
    innerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width(86),
    },
    checkDetailsBtn:{
        backgroundColor: AppColors.yellow,
        paddingVertical: height(0.8),
        paddingHorizontal:width(2),
        borderRadius: width(8),
    },
    checkDetailsBtnText:{
        fontSize: width(3),
        color: AppColors.white
    }
})

export default styles