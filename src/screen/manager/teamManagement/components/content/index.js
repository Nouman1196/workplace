import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles, { customStyles } from './styles';

const Content = ({ item, index, navigation }) => {
    return (
        <TouchableOpacity disabled = {item.management} onPress={() => navigation.navigate(item.navigation)} key={index} style={styles.cardContainer}>
            <View style={styles.internalContainer}>
                <View style={styles.internalContentContainer}>
                    <View style={styles.iconContainer}>
                        {item.Icon}
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.bottomRowContainer}>
                        <View style={styles.bottomContentContainer}>
                            {item.management ?
                                item.leftKey :
                                <Text style={styles.contentTitle}>{item.leftKey}</Text>
                            }
                            <Text style={styles.contentDetailedText}>{item.leftValue}</Text>
                        </View>
                        <View style={styles.bottomContentContainer}>
                            {item.management ?
                                item.rightKey :
                                <Text style={styles.contentTitle}>{item.rightKey}</Text>
                            }
                            <Text style={styles.contentDetailedText}>{item.rightValue}</Text>
                        </View>
                    </View>
                </View>
                <View style={customStyles(item.barColor).barStyle} />
            </View>
        </TouchableOpacity>
    )
}

export default Content