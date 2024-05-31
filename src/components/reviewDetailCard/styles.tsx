import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    reviewContainer: {
        width:width(94),
        flexDirection: 'row',
        marginBottom: height(1),
        backgroundColor: AppColors.white,
        borderRadius: width(3),
        padding: width(4),
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 2,
      },
      reviewerImage: {
        width: width(10),
        height: width(10),
        borderRadius: width(20),
        marginRight: width(3),
      },
      reviewContent: {
        flex: 1,
      },
      reviewDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
      },
      readMore: {
        marginTop: 8,
        fontSize: 14,
        color: '#0066cc',
        fontWeight: 'bold',
      },
      Ratingcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-start',
        marginVertical:height(1)
      },
      starsContainer: {
        flexDirection: 'row',
      },
})

export default styles