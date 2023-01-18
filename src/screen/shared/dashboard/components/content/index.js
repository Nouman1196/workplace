import React from 'react';
import { View, Text } from 'react-native';
import Theme from '../../../../../theme/theme';
import TextStyle from '../../../../../theme/textStyle/textStyle';
import styles from '../../styles';

const Boxes = ({ item, index }) => (
    <View key={index} style={styles.boxes}>
        <View style={Theme.adjustRow}>
            {item.Icon}
            <Text style={[TextStyle.mediumBlackText, { color: item.iconColor }]}>{item.count}</Text>
        </View>
        <Text numberOfLines={2} style={[TextStyle.mediumRegularBlackText, { marginTop: 15 }]}>{item.title}</Text>
    </View>
)
export default Boxes