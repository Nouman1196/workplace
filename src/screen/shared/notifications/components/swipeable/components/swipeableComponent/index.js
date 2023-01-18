import React from "react";
import { View, Text } from "react-native";
import Color from "../../../../../../../theme/colors/colors";
import { semiBold } from "../../../../../../../theme/textStyle/textFonts";

const SwipeableComponent = ({ title }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text style={{ color: Color.black, ...semiBold }}>{title}</Text>
        </View>
    )
}

export default SwipeableComponent