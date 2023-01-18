import React, { useState } from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './styles';
import { CalendarIcon } from "../../../../../assets/svg";

const DatePickerBtn = ({ btnText, onDateSelect }) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <DateTimePickerModal
                isVisible={visible}
                mode="date"
                maximumDate={Platform.OS == 'android' ? new Date() : null}
                onConfirm={(date) => {onDateSelect(date), setVisible(false) }}
                onCancel={() => setVisible(false)}
            />
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.selectableButtons}>
                <Text style={styles.selectableTitleBlack}>{btnText}</Text>
                <CalendarIcon />
            </TouchableOpacity>
        </>

    );
};
export default DatePickerBtn;