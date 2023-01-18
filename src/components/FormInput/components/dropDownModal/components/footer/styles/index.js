import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../../theme/textStyle/textFonts";
const styles = StyleSheet.create({

    footerContainer: {
        padding: 10,
        borderColor: Color.transparent,
        borderTopColor: Color.grey,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerTexts: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        padding: 5,
        ...semiBold
    },
})
export default styles