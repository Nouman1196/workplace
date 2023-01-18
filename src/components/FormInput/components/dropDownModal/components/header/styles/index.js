import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../../theme/colors/colors";
import { sideMargin } from "../../../../../../../theme/theme";
import { semiBold } from "../../../../../../../theme/textStyle/textFonts";
const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        borderColor: Color.transparent,
        borderBottomColor: Color.grey,
        borderWidth: 1
    },
    titleText: {
        color: Color.fontBlack,
        fontSize: RFValue(12),
        ...semiBold
    },
    searchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderColor: Color.lightGray,
        borderWidth: 0.5,
        margin: sideMargin,
        padding: 8,
        borderRadius: 4
    },
    searchText: {
        flex: 1,
        marginLeft: 5
    }
})
export default styles