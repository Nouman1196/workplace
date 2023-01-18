import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { styles } from './styles';
const Skelton = ({ style }) => {
    const opacity = useRef(new Animated.Value(0.3))
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                // Animated.timing(opacity.current, {
                //     tovalue: 0.3,
                //     useNativeDriver: true,
                //     duration: 800,
                // }),
            ]),
        ).start()
    }, [opacity]);
    return (
        <Animated.View style={[{ opacity: opacity.current }, styles.skelton, style]} />
    )
}

export default Skelton
