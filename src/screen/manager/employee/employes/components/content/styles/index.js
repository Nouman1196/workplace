import { StyleSheet } from "react-native";
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
    cardContainer: {
        backgroundColor: Color.white,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 10,
        ...shadow
    },
    primaryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameText: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        ...semiBold
    },
    designationText: {
        color: Color.fontGray,
        fontSize: RFValue(9),
        ...semiBold
    },
    viewInfo: {
        color: Color.red,
        fontSize: RFValue(10),
        ...semiBold
    },
    border: {
        width: 3,
        height: 50,
        borderRadius: 10,
        backgroundColor: Color.red
    },
    thirdContainer: {
        flex: 1,
        paddingHorizontal: 13
    },
    rowContainer: {
        flexDirection: 'row'
    },
    dpImage: {
        height: 65,
        width: 65,
        borderRadius: 100
    },
    touchableContainer: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center'
    },
})

export default styles