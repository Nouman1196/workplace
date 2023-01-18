import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../../../theme/colors/gradientColor';
import styles from './styles';

const ListHeader = ({ title1, title2, title3 }) => {
    return (
        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1.5, y: 1 }} colors={GradientColor.themeGradient} style={styles.listHeaderTitlesContainer}>
            <Text style={styles.listHeaderTitles}>{title1}</Text>
            <Text style={styles.listHeaderTitles}>{title2}</Text>
            <Text style={styles.listHeaderTitles}>{title3}</Text>
        </LinearGradient>
    )
}
export default ListHeader