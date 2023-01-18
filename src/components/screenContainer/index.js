import React from "react";
import { SafeAreaView, View } from "react-native";
import Theme from "../../theme/theme";

const ScreenContainer = ({children}) => {

    return (
        <SafeAreaView style={Theme.container}>
            <View style={Theme.redcontainer}>
                <View style={Theme.innerWhiteContainer}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ScreenContainer

export const ProfileScreenContainer = ({children}) => {

    return (
        <SafeAreaView style={Theme.container}>
            <View style={Theme.redcontainer}>
                <View style={Theme.innerWhiteProfileContainer}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}