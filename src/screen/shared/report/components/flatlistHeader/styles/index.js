import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../theme/colors/colors";
import { regularText, semiBold } from "../../../../../../theme/textStyle/textFonts";
import { sideMargin } from "../../../../../../theme/theme";

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
    contentContainer: {
        paddingHorizontal: sideMargin
    },
    listFooterComponentStyle: {
        bottom: 35
    },
    headerTitle: {
        color: Color.white,
        fontSize: RFValue(16),
        ...semiBold
    },
    listHeaderTitles: {
        color: Color.white,
        fontSize: RFValue(11),
        ...semiBold
    },
    listHeaderTitlesContainer: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 19,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnColumnWrapper: {
        justifyContent: 'space-between'
    },
    buttonHorizontal: {
        paddingHorizontal: sideMargin
    },
    weeklyText: {
        fontSize: RFValue(12),
        color: Color.fontBlack,
        marginVertical: sideMargin,
        ...semiBold
    },
    clearBtnContainer: {
        backgroundColor: Color.newThemeColor,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 4,
        ...shadow
    },
    clearBtnTitle: {
        fontSize: RFValue(10),
        color: Color.white,
        ...regularText
    }
})

export default styles