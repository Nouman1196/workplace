import React from "react";
import { Text, ScrollView, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import { FormInput } from "../../../../components/FormInput";
import { UserGrayIcon, EmailGreyIcon, PasswordGreyIcon } from "../../../../assets/svg";
import { setName, setEmail, setPassword, setCPassword, setErrorText } from "../../../../redux/authentication/signup/reducer";
import ButtonGradient from "../../../../components/buttons";
import styles from "../styles";
import { signUpAction } from "../../../../redux/authentication/signup/action";
import Color from "../../../../theme/colors/colors";

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch()
    const { name, email, password, cPassword, errortext } = useSelector((state) => state.signUpApi);

    const submit = () => {
        Keyboard.dismiss()
        signUpAction({ navigation })
    }
    return (
        <ScreenContainer>
            <ScrollView>
                <Text style={styles.headerText}>Fill up your personal information.</Text>
                <FormInput
                    title={"User Name"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter User Name"}
                    LeftChild={<UserGrayIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setName(data)) }}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={name}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please enter your name' ? 'Please enter your Name' : errortext === 'Name must should contain 3 letters' ? 'Name is too short' : null}
                />
                <FormInput
                    title={"Email"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Email"}
                    LeftChild={<EmailGreyIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setEmail(data.trim())) }}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={email}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please Enter Your Email' ? 'Please Enter Your Email' : errortext === 'Email format is invalid' ? 'Email format is invalid' : null}
                />
                <FormInput
                    title={"Password"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Password"}
                    LeftChild={<PasswordGreyIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setPassword(data.trim())) }}
                    secureTextEntry={true}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={password}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === 'Please Enter Your Password' ? 'Please Enter Your Password' : errortext === 'Password must should contain 8 digits' ? 'Password must should contain 8 digits' : null}
                />
                <FormInput
                    title={"Confirm Password"}
                    placeholderTextColor={Color.placeholderColor}
                    placeholder={"Enter Confirm Password"}
                    LeftChild={<PasswordGreyIcon />}
                    onChangeText={(data) => { dispatch(setErrorText('')), dispatch(setCPassword(data.trim())) }}
                    secureTextEntry={true}
                    style={styles.leftIconSpace}
                    containerStyle={styles.inputContainer}
                    titleStyle={styles.dropDownTitle}
                    value={cPassword}
                    textInputContainerStyle={styles.textInputContainerStyle}
                    error={errortext === "Please enter your confirm password" ? 'Please enter your Confirm Password' : errortext === "Password doesn't match" ? 'Password not match' : null}
                />

                <ButtonGradient style={styles.saveBtnAddLeaves} onPress={submit} title={"Next"} />
            </ScrollView>
        </ScreenContainer>
    )
}

export default SignUp