import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles, { customStyles } from "./styles";
import GradientColor from "../../../../../theme/colors/gradientColor";
import Color from "../../../../../theme/colors/colors";

const TabViewHeader = ({ navigationState, index, setIndex }) => {
    return (
        <View style={styles.tabViewHeaderContainer}>
            {navigationState.routes.map((item, key) => (
                <TouchableHighlight underlayColor={Color.transparent} key={key} onPress={() => setIndex(key)} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={index == key ? GradientColor.themeGradient : GradientColor.transparentGradient} style={customStyles({ length: navigationState.routes?.length }).tabButtonContainer}>
                        <Text style={customStyles({ index, key }).title}>{item.title}</Text>
                        <Text style={customStyles({ index, key }).description}>{item.count}</Text>
                    </LinearGradient>
                </TouchableHighlight>
            ))
            }
        </View>
    )
}

export default TabViewHeader