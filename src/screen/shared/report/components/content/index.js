import React from 'react';
import { View, Text } from 'react-native';
import ListHeader from '../listHeader';
import styles from './styles';
import { workingHoursWarningText } from '../../../../../redux/report/action';

const Content = ({ history, break_time, leaves_msg, in_work_sec, working_time, date, in_office }) => {

    return (
        <>
            <View style={styles.reportListMainContainer}>
                <ListHeader title1={date} title3={in_office} />
                <View style={styles.reportItemContainer}>
                    <View style={styles.reportItemDetailsContainer}>
                        <View style={styles.reportItemSepratorContainer}>
                            <View style={styles.reportItemDetailedContainer}>
                                <Text style={styles.reportContentInternalTitle}>Check In</Text>
                                {history?.map((item, key) => (
                                    <Text key={key} style={styles.reportContentInternalDesc}>{item.check_in ? item.check_in : 'N/A'}</Text>
                                ))
                                }
                            </View>
                            <View style={styles.reportItemSeprator} />
                            <View style={styles.reportItemDetailedContainer}>
                                <Text style={styles.reportContentInternalTitle}>Break Time</Text>
                                <Text style={styles.reportContentInternalDesc}>{break_time}</Text>
                            </View>
                        </View>
                        <View style={styles.reportItemSepratorContainer}>
                            <View style={styles.reportItemDetailedContainer}>
                                <Text style={styles.reportContentInternalTitle}>Check Out</Text>
                                {history?.map((item, key) => (
                                    <Text key={key} style={styles.reportContentInternalDesc}>{item.check_out ? item.check_out : 'N/A'}</Text>
                                ))
                                }
                            </View>
                            <View style={styles.reportItemSeprator} />
                            <View style={styles.reportItemDetailedContainer}>
                                <Text style={styles.reportContentInternalTitle}>Working Hours</Text>
                                <Text style={workingHoursWarningText(leaves_msg, in_work_sec) ? styles.reportContentInternalDescRed : styles.reportContentInternalDesc}>{working_time}</Text>
                            </View>
                        </View>
                    </View>
                    {typeof leaves_msg == 'string' &&
                        <>
                            <View style={styles.reportItemSeprator} />
                            <View style={styles.reportItemDetailedContainer}>
                                <Text style={styles.reportContentInternalTitle}>Leave Type</Text>
                                <Text style={styles.reportContentInternalDesc}>{leaves_msg}</Text>
                            </View>
                        </>
                    }
                </View>
            </View>
        </>
    );
};
export default Content;