import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../../theme/colors/colors";
import { regularText, semiBold } from "../../../../../../../theme/textStyle/textFonts";



const styles = StyleSheet.create({
    reportListMainContainer: {
        borderColor: '#F6F6F6',
        borderStartColor: Color.transparent,
        borderWidth: 1
    },
    reportItemContainer: {
        backgroundColor: Color.white
    },
    reportItemDetailsContainer: {
        flexDirection: 'row'
    },
    reportItemSepratorContainer: {
        justifyContent: 'space-between',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        borderColor: '#F6F6F6',
        paddingVertical: 10,
        borderTopColor: Color.transparent,
    },
    reportItemSeprator: {
        borderWidth: 1,
        borderTopColor: '#F6F6F6',
        borderColor: Color.transparent,
        width: '100%'
    },
    
    reportItemDetailedContainer: {
        paddingVertical: 19,
        alignItems: 'center'
    },
    reportContentInternalTitle: {
        color: Color.fontBlack,
        fontSize: RFValue(10),
        ...semiBold
    },
    reportContentInternalDesc: {
        color: Color.fontBlack,
        fontSize: RFValue(9),
        ...regularText
    },
    reportContentInternalDescRed: {
        color: Color.red,
        fontSize: RFValue(9),
        ...regularText
    },
})

export default styles