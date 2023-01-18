import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../theme/textStyle/textFonts";
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    tabViewHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
})
export const customStyles = ({ index, key, length }) => StyleSheet.create({
    title: {
        color: index == key ? Color.white : Color.black,
        fontSize: RFValue(10),
        ...semiBold,
    },
    description: {
        color: index == key ? Color.white : Color.black,
        fontSize: RFValue(9),
        ...semiBold,
    },
    tabButtonContainer: {
        height: 45,
        width: width / length * 0.95,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles