import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Color from "../../../../../theme/colors/colors";
import { semiBold } from "../../../../../theme/textStyle/textFonts";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../styles";
import GradientColor from "../../../../../theme/colors/gradientColor";


const TabViewHeader = ({ navigationState, index, setIndex }) => {
    return (
        <View style={styles.tabViewHeaderContainer}>
            {navigationState.routes.map((item, key) => (
                <TouchableOpacity onPress={() => setIndex(key)} key={key} style={{}}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={index == key ? GradientColor.themeGradient : GradientColor.whiteGradient} style={styles.tabButtonContainer}>
                        <Text style={{ color: index == key ? Color.white : Color.black, ...semiBold, }}>{item.title}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            ))
            }
        </View>
    )
}

export default TabViewHeader