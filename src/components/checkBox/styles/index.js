import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../theme/colors/colors";
import { semiBold } from "../../../theme/textStyle/textFonts";

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxContainer: {
        padding: 6,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: Color.grey
    },
    checkBoxFilledContainer: {
        padding: 6,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: Color.grey,
        backgroundColor: Color.red
    },
    title: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        marginLeft: 5,
        ...semiBold
    }
})

export default styles