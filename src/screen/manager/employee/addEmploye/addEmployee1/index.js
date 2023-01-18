import React from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../../../../components/screenContainer";
import { DropDown } from "../../../../../components/FormInput";
import { setRole, } from "../../../../../redux/addEmployes/reducer";
import { UserIcon, SkillIcon, CalendarIcon, ProjectsIcon, DepartmentIcon, WorkshiftIcon } from "../../../../../assets/svg";
import ButtonGradient from "../../../../../components/buttons";
import styles from "../styles";

const AddEmploye1 = () => {
    const dispatch = useDispatch()
    const { role, roleList, joining_date, skillsList, skill, projectList, departmentList, department, workShiftList, workshift, } = useSelector((state) => state.addEmployesApi);

    return (
        <ScreenContainer>
            <ScrollView>
                <DropDown
                    title={"Role"}
                    placeholder={"Select Role"}
                    onConfirm={(data) => { dispatch(setRole(data)) }}
                    data={roleList}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<UserIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    value={role.value}
                />
                <DropDown
                    title={"Joining Date"}
                    placeholder={"Select Joining Date"}
                    calendar={true}
                    onConfirm={(date) => dispatch(setBirthday(date.toISOString().split('T')[0]))}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<CalendarIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    value={joining_date}
                />
                <DropDown
                    title={"Skills"}
                    placeholder={"Select Skills"}
                    setSelectedItem={() => { }}
                    data={skillsList}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<SkillIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                // value = {skill}
                />
                <DropDown
                    title={"Projects"}
                    placeholder={"Select Projects"}
                    setSelectedItem={() => { }}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<ProjectsIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    data={projectList}
                />
                <DropDown
                    title={"Department"}
                    placeholder={"Select Department"}
                    setSelectedItem={() => { }}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<DepartmentIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    data={departmentList}
                />
                <DropDown
                    title={"Workshift"}
                    placeholder={"Select Workshift"}
                    setSelectedItem={() => { }}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<WorkshiftIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    data={workShiftList}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <ButtonGradient style={styles.saveBtnAddLeaves} onPress={() => { }} title={"Add"} />
            </ScrollView>
        </ScreenContainer>
    )
}

export default AddEmploye1