import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../theme/colors/colors";
import { regularText, semiBold } from "../../../theme/textStyle/textFonts";

const styles = StyleSheet.create({
    errorText: {
        color: Color.red,
        fontSize: RFValue(10),
        ...semiBold,
    },
    forgotPasswordTitle: {
        color: Color.fontBlack,
        ...semiBold,
        fontSize: RFValue(10)
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginRight: 15,
    },
    dropDownContainr: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    textInput: {
        color: Color.fontBlack
    },
    text: {
        flex: 1
    },
    maxText: {
        textAlign: 'right',
        padding: 5,
        fontSize: RFValue(9),
        ...regularText
    }
})

export default styles