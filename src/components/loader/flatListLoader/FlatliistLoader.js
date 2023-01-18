import React from 'react';
import { ActivityIndicator } from 'react-native';
import Color from '../../../theme/colors/colors';

const FlatlistLoader = ({ loading }) => {
    return (
        <ActivityIndicator animating={loading} color={Color.red} size={22} />
    )
}
export default FlatlistLoader