import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../theme/colors/colors";
import { sideMargin } from "../../../../../theme/theme";
import { regularText, semiBold } from "../../../../../theme/textStyle/textFonts";


export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center'
    },
    modalInternalContainer: {
        backgroundColor: Color.white,
        height: 220,
        borderRadius: 4,
        marginHorizontal: sideMargin
    },
    inputContainer: {
        marginTop: sideMargin,
        paddingHorizontal: sideMargin
    },
    dropDownContainer: {
        marginTop: sideMargin,
        paddingHorizontal: sideMargin
    },
    titleStyle: {
        fontSize: RFValue(12),
        color: Color.fontBlack,
        marginBottom: 5,
        ...semiBold
    },
    leftIconSpace: {
        marginLeft: 5,
        flex: 1
    },
    placeholderStyle: {
        fontSize: RFValue(10),
        color: Color.placeholderColor,
        ...regularText
    },
    textInputContainerStyle: {
        backgroundColor: '#F1F1F1',
        borderRadius: 4,
    },
    calendarIcon: {
        marginRight: 5
    },
    btnContainer: {
        // alignSelf: 'flex-end'
        marginTop: 10
    },
    btn: {
        paddingHorizontal: 40,
        paddingVertical: 8
    },
    btnTitle: {
        fontSize: RFValue(11),
        color: Color.white,
        ...semiBold
    }
})