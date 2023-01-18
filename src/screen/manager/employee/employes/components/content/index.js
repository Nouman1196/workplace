import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../../../../../redux/report/reducer";
import { setOtherProfileIndex } from "../../../../../../redux/profile/reducer";
import styles from "./styles";

const Content = ({ navigation, index, id, name, profile_image_url }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.cardContainer}>
            <View style={styles.primaryContainer}>
                <View style={styles.thirdContainer}>
                    <View style={styles.rowContainer}>
                        <Image resizeMode="contain" style={styles.dpImage} height={65} width={65} source={{ uri: profile_image_url }} />
                        <TouchableOpacity onPress={() => { dispatch(setEmployeeData({ id, name })), navigation.navigate('EmployesReport') }} style={styles.touchableContainer}>
                            <Text style={styles.nameText}>{name}</Text>
                        </TouchableOpacity>
                        <Text onPress={() => { dispatch(setOtherProfileIndex(index)), navigation.navigate('Profile', { otherId: id }) }} style={styles.viewInfo}>{'View Info'}</Text>
                    </View>
                </View>
                <View style={styles.border} />
            </View>
        </View>
    )
}

export default Content