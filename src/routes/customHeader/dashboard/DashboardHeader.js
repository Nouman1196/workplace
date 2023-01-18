import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, Text, StyleSheet } from 'react-native';
import Color from '../../../theme/colors/colors';
import Theme from '../../../theme/theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from '@react-navigation/native';
import { DrawerIcon } from '../../../assets/svg/Svg';
const DashboardHeader = ({ name, profileImage, navigation, MarkAllRead }) => {
    return (
        <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
            <TouchableOpacity onPress = {() => alert("Adada")}>
                <DrawerIcon  />
            </TouchableOpacity>
            {/* <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}>Dashboard</Text>
            <View style={Theme.alignItemEnd}>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Text>Notify</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )

}

export default DashboardHeader