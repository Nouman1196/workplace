import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Color from '../../../../../../theme/colors/colors';
import { regularText, semiBold } from '../../../../../../theme/textStyle/textFonts';

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

    timerContainer: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 13,
        ...shadow,
    },

    headers: {
        fontSize: RFValue(10),
        color: Color.white,
        ...semiBold
    },
    timer: {
        fontSize: RFValue(16),
        color: Color.white,
        ...semiBold
    },
    details: {
        fontSize: RFValue(10),
        color: Color.white,
        ...regularText
    }

})

export default styles