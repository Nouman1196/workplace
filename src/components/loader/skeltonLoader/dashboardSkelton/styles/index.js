import { StyleSheet } from 'react-native';
import Color from '../../../../../theme/colors/colors';

let sideMargin = 25
export const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.backgroundColor,
        flex: 1,
    },
    timeContainer: {
        height: '25%',
        marginHorizontal: sideMargin,
        marginTop: 15,
        borderRadius: 10,
    },
    firstBlockContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        marginHorizontal: sideMargin
    },
    secondBlockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: sideMargin,
        marginTop: 15
    },
    block: {
        height: 130,
        width: '45%',
        borderRadius: 10,
    },
    timeBlock: {
        height: 60,
        marginTop: 10,
        marginHorizontal: sideMargin,
        borderRadius: 10,
    },
    calendarBlock: {
        height: 150,
        marginTop: 10,
        marginHorizontal: sideMargin,
        borderRadius: 10,
    }
})