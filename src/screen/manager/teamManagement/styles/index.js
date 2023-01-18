import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../theme/colors/colors";
import { semiBold } from "../../../../theme/textStyle/textFonts";
import { sideMargin } from "../../../../theme/theme";
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: sideMargin,
        marginTop: sideMargin
    },
    mainTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(16),
        marginVertical: 25,
        ...semiBold
    },

    tabViewHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tabButtonContainer: {
        padding: 10,
        width: width / 2.2,
        borderRadius: 5,
        alignItems: 'center'
    }
})

export default styles