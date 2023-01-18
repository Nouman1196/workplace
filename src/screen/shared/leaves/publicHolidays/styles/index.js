import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../theme/colors/colors";
import { semiBold } from "../../../../../theme/textStyle/textFonts";
import { sideMargin } from "../../../../../theme/theme";


const shadow = {
    shadowColor: "#B0B0B0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        margin: sideMargin,
        ...shadow
    },
    mainTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(14),
        marginVertical: 10,
        ...semiBold
    }
})

export default styles