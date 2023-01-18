import { StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../colors/colors";
import { semiBold, regularText, boldText } from "../textFonts";
const TextStyle = StyleSheet.create({

    mediumRegularBlackText: {
        color: Color.black,
        fontSize: 14,
        ...regularText
    },

    largeSemiBoldText: {
        ...semiBold,
        fontSize: RFValue(16), // fontSize 20
    },

    mediumRegularplaceholderColorText: {
        color: Color.placeholderColor,
        fontSize: 14,
        ...regularText
    },
    mediumRegularGrayText: {
        color: Color.disableGrey,
        fontSize: 14,
        ...regularText
    },
    mediumRegularWhiteText: {
        color: Color.white,
        ...regularText,
        fontSize: 14
    },
    mediumRegularRedText: {
        color: Color.red,
        ...regularText,
        fontSize: 14
    },
    mediumRegularThemeBlueText: {
        color: Color.themeBlue,
        ...regularText,
        fontSize: 14,
        fontWeight: 'bold'
    },
    smallRegularWhiteText: {
        color: Color.white,
        ...regularText,
        fontSize: 12.5
    },
    smallRegularBlackText: {
        color: Color.black,
        ...regularText,
        fontSize: 12.5
    },
    smallRegularEritheiaBlueText: {
        color: Color.eritheiaBlue,
        ...regularText,
        fontSize: 12.5
    },
    smallRegularRedText: {
        color: Color.red,
        ...regularText,
        fontSize: 12.5
    },
    extraSmallRegularWhiteText: {
        color: Color.white,
        ...regularText,
        fontSize: 10
    },
    mediumBlackText: {
        color: Color.black,
        ...semiBold,
        fontSize: 14
    },
    mediumDisableBlackText: {
        color: Color.disableGrey,
        ...semiBold,
        fontSize: 14
    },
    lMediumBlackText: {
        color: Color.black,
        ...semiBold,
        fontSize: 18
    },
    lMediumWhiteText: {
        color: Color.white,
        ...semiBold,
        fontSize: 18
    },
    mediumBRedText: {
        color: Color.red,
        ...semiBold,
        fontSize: 14,
    },
    mediumWhiteText: {
        color: Color.white,
        ...semiBold,
        fontSize: 14
    },
    smallMediumBlackText: {
        color: Color.black,
        ...semiBold,
        fontSize: 12.5
    },
    largeMediumBlackText: {
        color: Color.black,
        ...semiBold,
        fontSize: 20
    },
    largeMediumWhiteText: {
        color: Color.white,
        ...semiBold,
        fontSize: 20
    },
    largeMediumRedText: {
        color: Color.darkRed,
        ...semiBold,
        fontSize: 20
    },
    extraLargeMediumBlackText: {
        color: Color.black,
        ...semiBold,
        fontSize: 30,
    },
    smallSemiBoldBlackText: {
        fontSize: 12.5,
        ...boldText,
        color: Color.black
    },
    mediumSemiBoldBlackText: {
        fontSize: 14,
        ...boldText,
        color: Color.black
    },
    mediumSemiBoldGrayText: {
        fontSize: 14,
        ...boldText,
        color: Color.disableGrey
    },

    largeSemiBoldRedText: {
        fontSize: 20,
        color: Color.darkRed,
        ...boldText
    },
    extraLargeSemiBoldWhiteText: {
        color: Color.white,
        ...boldText,
        fontSize: 25
    }

})


export default TextStyle;
