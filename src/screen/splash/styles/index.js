import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../../theme/colors/colors';
const { width } = Dimensions.get('window')

const size = 30;
export const styles = StyleSheet.create({
    image: { height: width, width: width / 1.2 },
    container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    item: { width: size, height: size, backgroundColor: Color.white, position: 'absolute' },
    loader: {
        color: Color.theme_color,
        fontSize: 100,
        marginTop: -80,
        letterSpacing: -15,
    }
})