import React from "react";
import { Text, ScrollView, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import { setDesignation, setTimeZone, setCompanyName, setAddress, setWebsiteURL, setErrorText } from "../../../../redux/authentication/signup/reducer";
import { FormInput, DropDown } from "../../../../components/FormInput";
import { DesignationGrayIcon, TimeGrayIcon, CompanyGrayIcon, AddressGrayIcon, WebsiteURLGrayIcon } from "../../../../assets/svg";
import ButtonGradient from "../../../../components/buttons";
import Theme from "../../../../theme/theme";
import Color from "../../../../theme/colors/colors";
import { timeZoneSearch } from "../../../../redux/authentication/signup/action";
import { signUpAction } from "../../../../redux/authentication/signup/action";
import Loader from "../../../../components/loader/simpleLoader/Loader";
import styles from "../styles";

const SignUp1 = ({ navigation }) => {
    const dispatch = useDispatch()
    const { website_url, time_zone, errortext, address, designation, companyName, timeZonesList, loading } = useSelector((state) => state.signUpApi);

    const submit = () => {
        Keyboard.dismiss()
        signUpAction({ navigation, type: 'submit' })
    }
    return (
        <ScreenContainer>
            <Loader animating={loading} />
            <ScrollView>
                <Text style={styles.headerText}>Fill your company information.</Text>
                <FormInput
                    title={"Designation"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Designation"}
                    LeftChild={<DesignationGrayIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setDesignation(data)) }}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={designation}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please enter your designation' ? 'Please enter your designation' : null}
                />
                <DropDown
                    title={"Time Zone"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Select Time Zone"}
                    onConfirm={(data) => { dispatch(setErrorText('')), dispatch(setTimeZone(data.value)) }}
                    data={timeZonesList}
                    onChangeText={timeZoneSearch}
                    isSearchable={true}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.dropDownContainer}
                    LeftChild={<TimeGrayIcon style={styles.calendarIcon} />}
                    titleStyle={styles.dropDownTitle}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    value={time_zone}
                    error={errortext === 'Please Select time zone' ? 'Please Select time zone' : null}
                />
                <FormInput
                    title={"Company Name"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Company Name"}
                    LeftChild={<CompanyGrayIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setCompanyName(data)) }}
                    secureText={true}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={companyName}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please Enter Company Name' ? 'Please Enter Company Name' : errortext === "Company name should be greater than 5 alphabets" ? "Company name should be greater than 5 alphabets" : null}
                />
                <FormInput
                    title={"Address"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Address"}
                    LeftChild={<AddressGrayIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setAddress(data)) }}
                    secureText={true}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={address}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please enter Company Address' ? 'Please enter Company Address' : null}
                />
                <FormInput
                    title={"Website URL"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Website URL"}
                    LeftChild={<WebsiteURLGrayIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setWebsiteURL(data)) }}
                    secureText={true}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={website_url}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please enter Company URL' ? 'Please enter Company URL' : errortext === 'Website URL format is invalid' ? 'Website URL format is invalid' : null}

                />
                <ButtonGradient style={styles.saveBtnAddLeaves} onPress={submit} title={"Sign Up"} />
            </ScrollView>
        </ScreenContainer>
    )
}

export default SignUp1