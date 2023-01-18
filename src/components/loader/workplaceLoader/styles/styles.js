import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(225,225,225,0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    workplaceGif: {
        height: width / 2,
        width: height / 3
    },
})

export default styles