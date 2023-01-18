import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../theme/colors/colors";
import { sideMargin } from "../../../../theme/theme";
import { semiBold, regularText } from "../../../../theme/textStyle/textFonts";
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
    swipeOutContainer: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        marginHorizontal: sideMargin,
        borderRadius: 6,
        ...shadow
    },
    swipeOutInternalContainer: {
        paddingVertical: 13,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    notificationTitle: {
        fontSize: RFValue(12),
        color: Color.fontBlack,
        ...semiBold
    },
    notificationDescription: {
        fontSize: RFValue(9),
        color: Color.fontGray,
        ...regularText
    },
    listFooterLoader: {
        alignItems: "flex-end",
        marginHorizontal: sideMargin,
    },
    contentContainerStyle: {
        marginTop: 20
    },
    markAsAllReadText: {
        color: Color.fontBlack,
        fontSize: RFValue(12),
        ...semiBold
    }
})

export default styles