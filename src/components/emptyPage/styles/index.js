import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    nothingToShow: {
        alignSelf: 'center',
        height: height / 3.5,
        width: height / 3,
        marginVertical: height / 10
    }
})
export default styles