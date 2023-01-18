import { StyleSheet } from "react-native";
import Color from "../../../../theme/colors/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { semiBold } from "../../../../theme/textStyle/textFonts";

const styles = StyleSheet.create({
    dpContainer: {
        flex: 0.4,
        backgroundColor: "#DD384A",
        borderBottomRightRadius: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsContainer: {
        flex: 1
    },
    nameTitle: {
        color: Color.white,
        fontSize: RFValue(16),
        ...semiBold
    },
    designationTitle: {
        color: Color.white,
        fontSize: RFValue(12),
        ...semiBold
    },

})

export default styles