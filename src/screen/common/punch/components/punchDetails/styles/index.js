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
    mapContainer: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    maps: {
        flex: 1
    },
    viewContainer: {
        flex: 2
    },
    listViewContainer: {
        padding: 15,
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: sideMargin,
        marginTop: 8,
        borderRadius: 4,
        ...shadow
    },
    contentContainerStyle: {
        marginTop: sideMargin
    },
    title: {
        color: Color.fontBlack,
        flex: 1,
        fontSize: RFValue(12),
        ...semiBold
    },
    desc: {
        color: Color.fontGray,
        flex: 1,
        fontSize: RFValue(12),
        ...regularText
    }
})

export default styles