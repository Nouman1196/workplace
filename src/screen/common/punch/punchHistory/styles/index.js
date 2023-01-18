import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../theme/colors/colors";
import { sideMargin } from "../../../../../theme/theme";
const { width } = Dimensions.get('window')
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
        paddingHorizontal: sideMargin,
        marginTop: 10
    },
    pendingListHeaderStyle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    tabViewContainer: {
        marginTop: sideMargin
    },
    initialLayout: { 
        width: width 
    },
    tabViewHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    tabButtonContainer: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    cardContainer: {
        backgroundColor: Color.white,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 10,
        ...shadow
    },
})

export default styles