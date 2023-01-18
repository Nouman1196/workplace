import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import { FormInput, DropDown } from "../../../../components/FormInput";
import styles from "../styles";
import { CalendarDropDownIcon } from "../../../../assets/svg";
import ButtonGradient from "../../../../components/buttons";
import { addLeavesAction } from "../../../../redux/addLeaves/action";
const LeaveAdd = () => {
    const { leavesTypes, loading } = useSelector((state) => state.addLeavesApi);


    useEffect(() => {
        addLeavesAction()
    }, [])

    return (
        <ScreenContainer>
            <ScrollView>
                <DropDown
                    title={"Leave Type"}
                    loading={loading}
                    data={leavesTypes}
                    setSelectedItem = {() => {}}
                    placeholder={"Select Leave Type"}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <DropDown
                    title={"Request Type"}
                    loading={loading}
                    setSelectedItem = {() => {}}
                    placeholder={"Select Request Type"}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <DropDown
                    title={"Day Part"}
                    loading={loading}
                    setSelectedItem = {() => {}}
                    placeholder={"Select the Part of the Day"}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <DropDown
                    title={"Leave From"}
                    placeholder={"Select Leave From Date"}
                    setSelectedItem = {() => {}}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    RightChild={<CalendarDropDownIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <DropDown
                    title={"Leave To"}
                    placeholder={"Select Leave To Date"}
                    setSelectedItem = {() => {}}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    RightChild={<CalendarDropDownIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <FormInput
                    title={"Reason"}
                    placeholder={"Reason"}
                    containerStyle={styles.dropDownContainer}
                    titleStyle={styles.dropDownTitle}
                    maxLength={100}
                    value={'adadad'}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <ButtonGradient title={"Save"} style={styles.saveBtnAddLeaves} />
            </ScrollView>
        </ScreenContainer>
    )
}

export default LeaveAdd