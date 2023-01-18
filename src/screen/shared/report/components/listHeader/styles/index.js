import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../theme/textStyle/textFonts";


const styles = StyleSheet.create({
    listHeaderTitles: {
        color: Color.white,
        fontSize: RFValue(11),
        ...semiBold
    },
    listHeaderTitlesContainer: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 19,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default styles