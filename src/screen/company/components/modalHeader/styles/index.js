import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { semiBold } from "../../../../../theme/textStyle/textFonts";
import Color from "../../../../../theme/colors/colors";
import { sideMargin } from "../../../../../theme/theme";


const styles = StyleSheet.create({
    modalTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#E8E8E8',
        borderColor: Color.transparent,
        borderWidth: 1,
        padding: sideMargin
    },
    modalTitle: {
        fontSize: RFValue(12.5),
        color: Color.fontBlack,
        textAlign: 'center',
        ...semiBold
    },
    crossBtn: {
        position: 'absolute',
        right: 13
    },
})

export default styles