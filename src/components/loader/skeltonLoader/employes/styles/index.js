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
        marginTop: sideMargin
    },
    name: {
        width: '80%', height: 10
    },
    picture: {
        height: 65,
        width: 65,
        borderRadius: 100,
        marginLeft: 10
    },
    pictureContainer: {
        flex: 0.6,
        alignItems: 'flex-start'
    },
    designation: {
        width: '70%',
        height: 6,
        marginTop: 15
    },
    dateTime: {
        width: '80%',
        height: 6.5
    },
    view: {
        width: '50%',
        height: 5.5,
        marginRight: 10
    },
    viewContainer: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'flex-end'
    },
    bar: {
        width: 3,
        height: '60%'
    },
    contentContainerStyle: {
        // marginTop: 10,
        paddingHorizontal: sideMargin
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
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    individualContainer: {
        flex: 1,
        alignItems: 'flex-start'
    }
})