import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../../../../../theme/colors/gradientColor';
import styles from './styles';
import { onSearch } from '../../../../../../../redux/report/action';
import { setStartDate, setEndDate } from '../../../../../../../redux/report/reducer';
import DatePickerBtn from '../../../datePickerBtn';

const SearchAreaView = () => {
    const dispatch = useDispatch()
    const { start_date, end_date } = useSelector((state) => state.reportApi);
    return (
        <View style={styles.selectableBtnContainer}>
            <DatePickerBtn onDateSelect={(date) => dispatch(setStartDate(date.toISOString().split('T')[0]))} btnText={start_date == '' ? 'Start Date' : start_date} />
            <DatePickerBtn onDateSelect={(date) => dispatch(setEndDate(date.toISOString().split('T')[0]))} btnText={end_date == '' ? 'End Date' : end_date} />
            <TouchableOpacity activeOpacity={0.9} onPress={onSearch} style={styles.searchBtnContainer}>
                <LinearGradient start={{ x: 0.2, y: 0 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.searchGradient} style={styles.searchBtnGradient}>
                    <Text style={styles.selectableTitleWhite}>Search</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
export default SearchAreaView;