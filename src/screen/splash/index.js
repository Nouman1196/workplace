import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { styles } from "./styles";
import { splashAction } from "../../redux/splash/actions";
const Splash = ({ navigation }) => {
    useEffect(() => {
        splashAction({navigation})
    }, [])
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/gifs/WorkPlaces.gif')} resizeMode="contain" style={styles.image} />
        </View>
    )
}
export default Splash
