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
        marginRight: 5,
        marginVertical: 5
    },
    saveBtnAddLeaves: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 7
    }
})

export default styles