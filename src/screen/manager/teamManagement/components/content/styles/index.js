import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../theme/textStyle/textFonts";


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
        fontSize: RFValue(12),
        ...semiBold,
        marginLeft: 14
    },
    contentTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        ...semiBold
    },
    contentDetailedText: {
        // color: Color.fontBlack,
        // marginTop: 5,
        // fontSize: RFValue(11),
        // ...semiBold,
        color: Color.fontGray,
        marginTop: 5,
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
    }
})

export const customStyles = (color) => StyleSheet.create({
    barStyle: { 
        width: 3, 
        height: 80, 
        backgroundColor: color, 
        borderRadius: 10 
    }
})

export default styles