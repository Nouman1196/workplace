import React from "react";
import { View, Text, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from "../../../../../../theme/colors/colors";
import styles from "../../styles";

const Header = ({ title, isSearchable, onChangeText }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            {isSearchable &&
                <View style={styles.searchableContainer}>
                    <AntDesign size={16} name="search1" />
                    <TextInput onChangeText={onChangeText} placeholderTextColor={Color.placeholderColor} style={styles.searchText} placeholder="Search" />
                </View>
            }
        </>
    )
}
export default Header