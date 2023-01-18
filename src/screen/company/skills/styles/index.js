import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../theme/colors/colors";
import { semiBold } from "../../../../theme/textStyle/textFonts";
import { sideMargin } from "../../../../theme/theme";

export const styles = StyleSheet.create({
    contentContainer: {
        marginHorizontal: sideMargin
    },
    headerTitle: {
        fontSize: RFValue(15),
        color: Color.fontBlack,
        textAlign: 'left',
        ...semiBold
    },
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