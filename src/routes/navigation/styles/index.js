import { StyleSheet } from "react-native";
import TextStyle from "../../../theme/textStyle/textStyle";
import Color from "../../../theme/colors/colors";
const styles = StyleSheet.create({
    headerTitle: {
        color: Color.tintColor,
        ...TextStyle.largeSemiBoldText
    },
    headerStyle: {
        backgroundColor: Color.backgroundColor,
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    headerStyleRed: {
        backgroundColor: Color.newThemeColor,
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },

})

export default styles