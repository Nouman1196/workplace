import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles, { customStyle } from './styles';
import { checkSelected, singleSelect } from '../../../../../redux/manageLeaves/action';
import { colorsSelector } from '../../../../../redux/manageLeaves/action';
import CheckBox from '../../../../../components/checkBox';
import * as RootNavigation from '../../../../../routes/rootNavigation';
const navigation = RootNavigation

const Content = ({ item, index, pending }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('PunchDetails', item)} key={index} style={styles.cardContainer}>
            <View style={styles.primaryCardContainer}>
                <View style={styles.thirdCardContainer}>
                    <View style={styles.checkBoxAllContainer}>
                        {pending &&
                            <CheckBox onPress={() => singleSelect(item.id)} checked={checkSelected(item.id)} style={styles.checkBoxContainer} />
                        }
                        <View style={styles.nameCardContainer}>
                            <Text style={styles.mainTitle}>{item.user_name}</Text>
                            <Text style={styles.statusTitle}>{item.leave_type}</Text>
                        </View>
                        <Text style={styles.timeTitle}>{item.request_type}</Text>
                        <Text style={customStyle(colorsSelector(item.status)).statusTitle}>{item.status}</Text>
                    </View>
                </View>
                <View style={customStyle(colorsSelector(item.status)).colorBar} />
            </View>
        </TouchableOpacity>
    )
}

export default Content