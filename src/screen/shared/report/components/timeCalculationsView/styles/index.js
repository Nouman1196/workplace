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
    reportCardContainer: {
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 25,
        width: cardWidth,
        ...shadow
    },
    title: {
        color: Color.white,
        marginTop: 10,
        fontSize: RFValue(10),
        ...semiBold
    },
    description: {
        color: Color.white,
        fontSize: RFValue(9),
        ...regularText
    }
})

export default styles