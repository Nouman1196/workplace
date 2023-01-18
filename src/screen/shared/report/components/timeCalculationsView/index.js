import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const TimeCalculationsView = ({ color, title, details, Icon }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.2, y: 1 }} colors={color} style={styles.reportCardContainer}>
            {Icon}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{details ? details : 'N/A'}</Text>
        </LinearGradient>
    );
};
export default TimeCalculationsView;