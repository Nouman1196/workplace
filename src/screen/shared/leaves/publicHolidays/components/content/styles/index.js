import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../../theme/textStyle/textFonts";


const shadow = {
    shadowColor: "#B0B0B0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Color.white,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 10,
        ...shadow
    },
    internalContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    internalContentContainer: {
        flex: 1,
        paddingHorizontal: 24
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        borderColor: Color.transparent,
        borderBottomColor: Color.borderColor,
        borderWidth: 1
    },
    title: {
        color: Color.fontBlack,
        fontSize: 16,
        ...semiBold,
        marginLeft: 14
    },
    contentTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(12),
        ...semiBold
    },
    contentDetailedText: {
        color: Color.fontGray,
        fontSize: RFValue(10),
        ...semiBold
    },
    bottomRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        justifyContent: 'space-around'
    },
    bottomContentContainer: {
        alignItems: 'center'
    },
    borderStyle: {
        width: 3, 
        height: 80, 
        backgroundColor: Color.red, 
        borderRadius: 10
    },
    descriptionText: {
        color: Color.fontGray,
        fontSize: RFValue(9),
        ...semiBold
    },
})

export default styles