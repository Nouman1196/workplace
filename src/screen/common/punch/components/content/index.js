import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { customStyle } from './styles';
import { colorsSelector, historyType, checkSelected, singleSelect } from '../../../../../redux/missedRequests/action';
import CheckBox from '../../../../../components/checkBox';
import * as RootNavigation from '../../../../../routes/rootNavigation';
import Color from '../../../../../theme/colors/colors';
const navigation = RootNavigation

const Content = ({ item, pending }) => {
    return (
        <TouchableHighlight underlayColor={Color.transparent} onPress={() => navigation.navigate('PunchDetails', item)} style={styles.cardContainer}>
            <View style={styles.primaryCardContainer}>
                <View style={styles.thirdCardContainer}>
                    <View style={styles.checkBoxAllContainer}>
                        {pending &&
                            <CheckBox onPress={() => singleSelect(item?.id)} checked={checkSelected(item?.id)} style={styles.checkBoxContainer} />
                        }
                        <View style={styles.nameCardContainer}>
                            <Text style={styles.mainTitle}>{item?.user_name}</Text>
                            <Text style={customStyle(historyType(item?.history_type).color)?.statusTitle}>{historyType(item?.history_type).title}</Text>
                        </View>
                        <Text style={styles.timeTitle}>{item?.created_at}</Text>
                        <Text style={customStyle(colorsSelector(item?.punched_status)).statusTitle}>{item?.punched_status}</Text>
                    </View>
                </View>
                <View style={customStyle(colorsSelector(item?.punched_status)).colorBar} />
            </View>
        </TouchableHighlight>
    )
}

export default Content