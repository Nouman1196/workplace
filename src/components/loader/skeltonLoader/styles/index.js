import { StyleSheet } from 'react-native'; 
import Color from '../../../../theme/colors/colors';

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
    skelton: {
        backgroundColor: Color.lightGray,
        borderRadius: 10,
        // paddingHorizontal: 16,
        // paddingVertical: 28,
        ...shadow
    }
})