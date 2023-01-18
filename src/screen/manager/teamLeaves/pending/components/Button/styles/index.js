import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../../theme/textStyle/textFonts";


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
    gradientBtnContainer: {
        borderRadius: 4,
        width: 60,
        alignItems: 'center',
        paddingVertical: 5,
        ...shadow
    },
    title: {
        color: Color.white,
        fontSize: RFValue(9),
        ...semiBold
    }
})
export default styles