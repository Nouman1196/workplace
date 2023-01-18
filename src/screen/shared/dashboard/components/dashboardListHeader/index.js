import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import { formatTimeString } from "../../../../../redux/timer/action";
import Theme from '../../../../../theme/theme';
import GradientColor from '../../../../../theme/colors/gradientColor';
import styles from './styles';

const DashboardListHeader = () => {
    const { date, timerData, stopWatchTime } = useSelector((state) => state.timerApi);
    const { check_in, check_out, break_time, work_time, punch_status, office_time } = timerData;

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }} colors={GradientColor.timerContainer} style={styles.timerContainer}>
            <View style={Theme.center}>
                <Text style={styles.headers}>{punch_status?.break_status ? "Break Time" : 'Office Time'}</Text>
                <Text style={styles.timer}>{formatTimeString(stopWatchTime)}</Text>
                <Text style={styles.details}>{date}</Text>
            </View>
            <View style={Theme.timerInterContainer}>
                <View>
                    <Text style={styles.headers}>Check In</Text>
                    <Text style={styles.details}>{check_in ? check_in : '--:--:--'}</Text>
                </View>
                <View style={Theme.end}>
                    <Text style={styles.headers}>Work Time</Text>
                    <Text style={styles.details}>{work_time ? work_time : '--:--:--'}</Text>
                </View>

            </View>
            <View style={Theme.timerInterContainer}>
                <View>
                    <Text style={styles.headers}>Check Out</Text>
                    <Text style={styles.details}>{check_out ? check_out : '--:--:--'}</Text>
                </View>
                <View style={Theme.end}>
                    <Text style={styles.headers}>{punch_status?.break_status ? 'Office Time' : 'Break Time'}</Text>
                    <Text style={styles.details}>{punch_status?.break_status ? office_time : !punch_status?.break_status ? break_time : '--:--:--'}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default DashboardListHeader