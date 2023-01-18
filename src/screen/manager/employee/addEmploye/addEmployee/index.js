import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../../../../components/screenContainer";
import { setName, setEmail, setBirthday, setMobileNumber, setGender, setAddress } from "../../../../../redux/addEmployes/reducer";
import { FormInput, DropDown } from "../../../../../components/FormInput";
import { UserIcon, EmailIcon, PhoneIcon, GenderIcon, LocationIcon } from "../../../../../assets/svg";
import ButtonGradient from "../../../../../components/buttons";
import { addEmployeeAction } from "../../../../../redux/addEmployes/action";
import styles from "../styles";

const AddEmployee = ({ navigation }) => {
    const { name, email, mobile_number, address, gender, birthday, genderList } = useSelector((state) => state.addEmployesApi);
    const dispatch = useDispatch()

    useEffect(() => {
        addEmployeeAction()
    }, [])

    return (
        <ScreenContainer>
            <ScrollView>
                <FormInput
                    title={"User Name"}
                    placeholder={"Enter User Name"}
                    onChangeText={(text) => dispatch(setName(text))}
                    LeftChild={<UserIcon />}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={name}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <FormInput
                    title={"Email"}
                    placeholder={"Enter Email"}
                    keyboardType="email-address"
                    onChangeText={(text) => dispatch(setEmail(text))}
                    LeftChild={<EmailIcon />}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={email}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <FormInput
                    title={"Phone Number"}
                    placeholder={"Enter Phone Number"}
                    keyboardType="number-pad"
                    onChangeText={(text) => dispatch(setMobileNumber(text))}
                    LeftChild={<PhoneIcon />}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={mobile_number}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />

                <DropDown
                    title={"Gender"}
                    placeholder={"Select Gender"}
                    onConfirm={(data) => dispatch(setGender(data))}
                    data={genderList}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<GenderIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    value={gender.value}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />

                <FormInput
                    title={"Address"}
                    placeholder={"Employee Address"}
                    onChangeText={(text) => dispatch(setAddress(text))}
                    LeftChild={<LocationIcon />}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={address}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />

                <DropDown
                    title={"Birthday"}
                    placeholder={"Select Your Date of Birth"}
                    calendar={true}
                    value={birthday}
                    onConfirm={(date) => dispatch(setBirthday(date.toISOString().split('T')[0]))}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<GenderIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                />
                <ButtonGradient style={styles.saveBtnAddLeaves} onPress={() => { navigation.navigate('AddEmploye1') }} title={"Next"} />
            </ScrollView>
        </ScreenContainer>
    )
}

export default AddEmployee