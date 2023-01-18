import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../theme/colors/colors";
import { regularText, semiBold } from "../../../../../../theme/textStyle/textFonts";

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

const cardWidth = "31%"

const styles = StyleSheet.create({
    selectableButtons: {
        backgroundColor: Color.white,
        width: cardWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 4,
        paddingVertical: 14,
        ...shadow
    },
    selectableTitleBlack: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        ...regularText
    },
   
})

export default styles