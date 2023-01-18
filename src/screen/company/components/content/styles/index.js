import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../theme/colors/colors";
import { regularText, semiBold } from "../../../../../theme/textStyle/textFonts";

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

export const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius: 4,
        marginTop: 10,
        ...shadow
    },
    internalContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 15
    },
    title: {
        fontSize: RFValue(12),
        color: Color.fontBlack,
        ...regularText,
        flex: 1
    },
    title1: {
        fontSize: RFValue(10),
        color: Color.fontBlack,
        ...semiBold,
        flex: 1
    },
    editIcon: {
        marginRight: 8
    },
    borderColor: {
        width: 3,
        backgroundColor: Color.red,
        borderRadius: 10, height: 30,
        alignContent: 'center'
    },
})