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

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Color.white,
        paddingVertical: 15,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        ...shadow
    },
    primaryCardContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thirdCardContainer: {
        flex: 1
    },
    nameCardContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        flex: 1,
        paddingHorizontal: 5,
        marginTop: 2,
        ...semiBold
    },
    timeTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(9),
        flex: 1,
        paddingHorizontal: 5,
        ...regularText
    },
    checkBoxContainer: {
        marginRight: 5,
        marginLeft: 24
    },
    checkBoxAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 24,
        justifyContent: 'center'
    }
})

export const customStyle = (color) => StyleSheet.create({
    statusTitle: {
        fontSize: RFValue(9),
        color,
        ...semiBold
    },
    colorBar: {
        width: 3,
        height: 50,
        borderRadius: 10,
        backgroundColor: color
    },
})

export default styles