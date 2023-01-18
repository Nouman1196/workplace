import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../theme/colors/colors";
import { sideMargin } from "../../../../theme/theme";

import { semiBold, regularText } from "../../../../theme/textStyle/textFonts";
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
    dpContainer: {
        top: -50,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center'
    },
    nameTitle: {
        fontSize: RFValue(16),
        marginTop: 7,
        color: Color.fontBlack,
        ...semiBold
    },
    designationTitle: {
        fontSize: RFValue(12),
        // marginTop: 2,
        color: Color.fontGray,
        ...semiBold
    },
    dp: {
        width: 110,
        height: 110,
        borderRadius: 200,
        borderColor: Color.white,
        borderWidth: 3.3
    },
    pictureUpdateIcon: {
        backgroundColor: 'rgba(225,225,225,0.75)',
        position: 'absolute',
        bottom: 10,
        right: 3,
        height: 25,
        width: 25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: sideMargin,
        paddingHorizontal: sideMargin
    },
    dropDownContainer: {
        marginTop: sideMargin,
        paddingHorizontal: sideMargin
    },
    dropDownTitle: {
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
        backgroundColor: Color.white,
        borderRadius: 4,
        ...shadow
    },
    calendarIcon: {
        marginRight: 8
    },
    saveBtnAddLeaves: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 7
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
    },
    keyboardAvoidViewContainer: {
        flex: 1,
        marginTop: 90
    }
})

export default styles