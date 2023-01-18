import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector, useDispatch } from "react-redux";
import { getMarkedDatesAction, generateColor, } from "../../../../../redux/dashboard/action";
import Theme from '../../../../../theme/theme';
import GradientColor from '../../../../../theme/colors/gradientColor';
import TextStyle from '../../../../../theme/textStyle/textStyle';
import { TeamManagementIcon } from "../../../../../assets/svg";
import styles from '../../styles';
import Color from '../../../../../theme/colors/colors';
import { setShowModal, setEvent, setSelectedDate } from '../../../../../redux/events/reducer';
const DashboardFooter = ({ navigation }) => {
    const dispatch = useDispatch()
    const { role } = useSelector((state) => state.userApi?.userData?.user);
    const { eventsData, selectedDate, event, showModal } = useSelector((state) => state.eventsApi);

    return (
        <>
            {role !== 'user' &&
                <TouchableOpacity onPress={() => navigation.navigate('TeamManagement')} style={styles.teamManagementBarContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <TeamManagementIcon style={{ marginRight: 10 }} />
                            <Text style={TextStyle.mediumRegularBlackText}>Team Management</Text>
                        </View>
                        <SimpleLineIcons onPress={() => navigation.navigate('TeamManagement')} color={Color.fontBlack} name={"arrow-right"} size={18} />
                    </View>
                </TouchableOpacity>
            }
            <Calendar
                onDayPress={(day) => {
                    for (let index = 0; index < eventsData.length; index++) {
                        if (day.dateString === moment(eventsData[index].start_date).format("YYYY-MM-DD")) {
                            dispatch(setEvent(eventsData[index].title))
                            dispatch(setShowModal(true))
                            break;
                        }
                    }
                    dispatch(setSelectedDate(day.dateString))
                }}
                markedDates={getMarkedDatesAction()}
                style={styles.calendar}
                // Specify theme properties to override specific styles for calendar parts. Default = {}
                theme={styles.calendarTheme}
            />
            <Modal onRequestClose={() => dispatch(setShowModal(false))} visible={showModal} transparent={true}>
                <View style={[Theme.modalViewContainerBlack, { justifyContent: "center" }]}>
                    <View style={[Theme.teamModal, { borderLeftColor: generateColor(), borderLeftWidth: 2, borderRadius: 0 }]}>
                        <TouchableOpacity style={[Theme.leaveHistoryModalButton, { paddingBottom: 0, paddingTop: 0 }]} onPress={() => dispatch(setShowModal(false))}>
                            <LinearGradient style={Theme.leaveHistoryModalGradientButton} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} />
                        </TouchableOpacity>
                        <Text style={{ color: "black", padding: 20 }}>{event}</Text>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default DashboardFooter