import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const Content = ({ index, item }) => {
    return (
        <View key={index} style={styles.listViewContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description ? item.description : '--'}</Text>
        </View>
    )
}
export default Content