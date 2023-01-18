import React from "react";
import { Text } from "react-native";
import styles from "../../styles";
import { readAllNotificationAction } from "../../../../../redux/notifications/action";

const ListHeader = () => {
    return (
        <Text onPress={readAllNotificationAction} style={styles.markAsAllReadText}>Mark all As Read</Text>
    )
}

export default ListHeader