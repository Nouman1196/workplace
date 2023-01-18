import React from "react";
import { View, Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import styles from "./styles";
import Color from "../../../../theme/colors/colors";

const ModalHeader = ({ onCross, title }) => {
    return (
        <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Feather style={styles.crossBtn} name="x" size={20} color={Color.black} onPress={onCross} />
        </View>
    )
}

export default ModalHeader       