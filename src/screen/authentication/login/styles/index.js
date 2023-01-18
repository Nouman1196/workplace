import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../theme/colors/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { semiBold, regularText } from "../../../../theme/textStyle/textFonts";
import { HP, WP } from "../../../../theme/responsivenes";

const { height } = Dimensions.get('window')
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
    gifContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    gif: {
        alignSelf: 'center',
        height: HP(20),
        width: WP(50)
    },
    img: {
        alignSelf: 'center',
        height: height / 8,
        width: height / 6.8
    },
    welcomeContainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    welcomeTitle: {
        fontSize: RFValue(31),
        color: Color.fontBlack,
        ...semiBold
    },
    secondaryTitle: {
        color: Color.fontGray,
        fontSize: RFValue(12),
        ...regularText
    },
    loginFieldContainer: {
        marginHorizontal: 50,
        flex: 2
    },
    textInput: {
        backgroundColor: Color.white,
        flex: 1,
        paddingLeft: 55,
        paddingVertical: 15,
        paddingRight: 15,
        borderRadius: 30,
        ...shadow
    },
    textInputPassword: {
        backgroundColor: Color.white,
        flex: 1,
        paddingLeft: 55,
        paddingVertical: 15,
        paddingRight: 38,
        borderRadius: 30,
        ...shadow
    },
    formInputContainer: {
        // marginTop: 25
    },
    mailIcon: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        marginLeft: -20
    },
    passwordMainIcon: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: -20,
        bottom: -20
    },
    eyeIcon: {
        position: 'absolute',
        zIndex: 1,
        right: 25,
        alignSelf: 'center'
    },
    textInputContainerStyle: {
        flexDirection: 'row'
    },
    gradientButtonStyle: {
        paddingVertical: 8,
        paddingHorizontal: 40,
    },
    dontText: {
        color: Color.fontBlack,
        fontSize: RFValue(12.5),
        textAlign: 'center',
        ...regularText
    },
    goSignUp: {
        color: Color.darkRed,
        fontSize: RFValue(12.5),
        ...semiBold
    }

})

export default styles