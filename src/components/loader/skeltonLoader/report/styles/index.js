import { StyleSheet } from 'react-native';
import Color from '../../../../../theme/colors/colors';

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
    title: {
        width: '30%',
        height: 10
    },
    description: {
        width: '25%',
        height: 7,
        marginTop: 7
    },
    bar: {
        width: '100%',
        height: 30,
        borderRadius: 0,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4
    },
    contentContainerStyle: {
        marginTop: 10
    },
    mainView: {
        flexDirection: 'row',
        borderBottomColor: Color.borderColor,
        borderColor: Color.transparent,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    internalView: {
        paddingVertical: 25,
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Color.transparent,
        borderRightColor: Color.borderColor
    },
    cardContainer: {
        backgroundColor: Color.white,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 4,
        ...shadow
    },
})