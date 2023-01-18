import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../theme/colors/colors";
import { semiBold } from "../../../theme/textStyle/textFonts";


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
    btnContainer: {
        alignSelf: 'center'
    },
    gradientBtnContainer: {
        borderRadius: 4,
        marginVertical: 15,
        ...shadow
    },
    buttonTitle: {
        color: Color.white,
        fontSize: RFValue(14),
        ...semiBold
    },
    btnViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default styles