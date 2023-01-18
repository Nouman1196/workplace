import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '../../../theme/theme';
import GradientColor from '../../../theme/colors/gradientColor';
import { setOptionModal } from '../../../redux/checkin-break/reducer';

const FloatingOptionButton = ({ style, activeOpacity }) => {
    const dispatch = useDispatch()
    const { optionModal } = useSelector((state) => state.checkinBreakApi);
    return (
        <View style={[{ position: 'absolute', zIndex: 1, bottom: 30, right: 10 }, style]}>
            <View style={Theme.alignItemCenter}>
                <TouchableOpacity activeOpacity={activeOpacity} onPress={() => dispatch(setOptionModal(!optionModal))} style={Theme.customTabBarAddButtonContainer}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={GradientColor.themeGradient} style={Theme.customTabBarButtonGradient}>
                        <Entypo name="dots-three-vertical" color={'white'} size={25} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FloatingOptionButton