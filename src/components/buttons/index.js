import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native'
import Theme from '../../theme/theme';
import GradientColor from '../../theme/colors/gradientColor';
import TextStyle from '../../theme/textStyle/textStyle';
import styles from './styles';
const ButtonGradient = ({ onPress, title, children, disabled, touchableOpacityContainerStyle, style, textStyle, btnContainer }) => {
    return (
        <TouchableOpacity style = {[styles.btnContainer, btnContainer]} activeOpacity={0.8} disabled={disabled} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={disabled ? GradientColor.grayGradient : GradientColor.themeGradient} style={[styles.gradientBtnContainer, style]}>
                <View style={[styles.btnViewContainer, touchableOpacityContainerStyle]}>
                    <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
                    {children &&
                        children
                    }
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export default ButtonGradient;
