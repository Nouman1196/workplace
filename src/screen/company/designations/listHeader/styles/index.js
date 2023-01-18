import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../theme/colors/colors";
import { semiBold } from "../../../../../theme/textStyle/textFonts";

export const styles = StyleSheet.create({
    listHeaderContainer: {
        marginTop: 10
    },
    btnContainer: {
        alignSelf: 'flex-end'
    },
    btn: {
        padding: 10
    },
    btnTitle: {
        fontSize: RFValue(11),
        marginRight: 5,
        color: Color.white,
        ...semiBold
    }
})