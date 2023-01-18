import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../theme/colors/colors";
import { WP } from "../../../../../theme/responsivenes";
import { regularText } from "../../../../../theme/textStyle/textFonts";

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center'
    },
    internalContainer: {
        backgroundColor: Color.white,
        marginHorizontal: WP(10),
        borderRadius: 5,
        height: '40%'
    },
    activityIndicatorContainer: {
        justifyContent: "center",
        height: height / 4.2
    },
    selectableBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    listDisableText: {
        color: Color.disableGrey,
        fontSize: RFValue(10),
        ...regularText
    },
    listText: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        ...regularText
    }
})
export default styles