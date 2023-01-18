import { StyleSheet } from 'react-native';
import Color from '../../../../../theme/colors/colors';
import { sideMargin } from '../../../../../theme/theme';

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

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.backgroundColor,
        flex: 1,
    },
    name: {
        width: '80%', height: 10
    },
    punchStatus: {
        width: '70%',
        height: 8,
        marginTop: 7
    },
    dateTime: {
        width: '80%',
        height: 6.5
    },
    status: {
        width: '55%',
        height: 5.5
    },
    bar: {
        width: 3,
        height: '60%'
    },
    contentContainerStyle: {
        marginTop: 10
    },
    cardContainer: {
        backgroundColor: Color.white,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        ...shadow
    },
    cardContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 5
    },
    individualContainer: {
        flex: 1,
        alignItems: 'center'
    }
})