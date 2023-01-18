import { StyleSheet } from "react-native";
import Color from "../../../theme/colors/colors";
import { semiBold } from "../../../theme/textStyle/textFonts";
import { RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
    headerTitleTint: {
        color: Color.tintColor,
        ...semiBold
    },
    headerTitleWhite: {
        color: Color.white,
        ...semiBold
    },
    headerStyle: {
        backgroundColor: Color.backgroundColor,
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    headerStyleRed: {
        backgroundColor: '#DD384A',
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    },
    drawerLabelStyle: {
        color: Color.fontBlack,
        ...semiBold,
        fontSize: RFValue(10)
    },
    drawerSubLabelStyle: {
        color: Color.fontBlack,
        ...semiBold,
        marginLeft: 7,
        fontSize: RFValue(9.5)
    },
    notificationIconContainer: { 
        marginRight: 23 
    },
    dashboardIconContainer: { 
        width: 5 
    },
    drawerIcon: { 
        marginLeft: 23 
    }


})

export default styles