import React from "react";
import { View, Text } from "react-native";
import { EditIcon, DeleteIcon } from "../../../../assets/svg";
import { styles } from "./styles";

const Content = ({ title, status, onEdit, onDelete }) => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.internalContentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title1}>{status}</Text>
                <EditIcon onPress={onEdit} style={styles.editIcon} />
                <DeleteIcon onPress={onDelete} />
            </View>
            <View style={styles.borderColor} />
        </View>
    )
}

export default Content       