import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const CheckBox = ({ style, checked, title, onPress }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[checked ? styles.checkBoxFilledContainer : styles.checkBoxContainer, style]} />
            {title &&
                <Text style={styles.title}>{title}</Text>
            }
        </View>
    )
}

export default CheckBox