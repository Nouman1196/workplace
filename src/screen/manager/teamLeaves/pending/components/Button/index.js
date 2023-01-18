import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native'
import GradientColor from '../../../../../../theme/colors/gradientColor';
import styles from './styles';


export const ButtonRed = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={GradientColor.themeGradient} style={[styles.gradientBtnContainer, style]}>
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export const ButtonGreen = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={GradientColor.searchGradient} style={[styles.gradientBtnContainer, style]}>
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};