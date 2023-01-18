import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Color from "../../../theme/colors/colors";
import { FormInput, DropDown } from "../../../components/FormInput";
import { UserIcon, EmailIcon, PhoneIcon, CalendarIcon } from "../../../assets/svg";
import { setUserProfile } from "../../../redux/profile/reducer";
import { ProfileScreenContainer } from "../../../components/screenContainer";
import styles from "./styles";
import { getProfileAction, compareData, onUpdate, updatePicture, resetData } from "../../../redux/profile/action";
import ButtonGradient from "../../../components/buttons";
import Loader from "../../../components/loader/simpleLoader/Loader";
const Profile = ({ route }) => {
    const dispatch = useDispatch()
    const { userProfile, hasUnsavedChanges, isUpdating } = useSelector((state) => state.profileApi);
    const { name, email, mobile_number, designation, profile_image_url, joining_date, birthday } = userProfile;
    const otherId = route.params?.otherId

    useEffect(() => {
        getProfileAction(otherId)
        return otherId && resetData
    }, [])
    useEffect(() => {
        compareData(otherId)
    }, [userProfile])

    return (
        <ProfileScreenContainer>
            <Loader animating={isUpdating} />
            <View style={styles.dpContainer}>
                <View>
                    <Image source={profile_image_url ? { uri: profile_image_url } : require('../../../assets/images/blankDp.png')} style={styles.dp} />
                    <TouchableOpacity onPress={updatePicture} activeOpacity={0.7} style={styles.pictureUpdateIcon}>
                        <Feather color={Color.white} size={16} name="camera" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.nameTitle}>{name}</Text>
                <Text style={styles.designationTitle}>{designation}</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.select({ ios: 200, android: 500 })}
                style={styles.keyboardAvoidViewContainer}
            >
                <ScrollView>
                    <FormInput
                        title={"Name"}
                        placeholder={"Enter User Name"}
                        onChangeText={(name) => { dispatch(setUserProfile({ ...userProfile, name })) }}
                        LeftChild={<UserIcon />}
                        style={styles.leftIconSpace}
                        containerStyle={styles.inputContainer}
                        titleStyle={styles.dropDownTitle}
                        value={name}
                        textInputContainerStyle={styles.textInputContainerStyle}
                    />
                    <FormInput
                        title={"Email"}
                        editable = {false}
                        placeholder={"Enter Email"}
                        keyboardType="email-address"
                        onChangeText={(email) => { dispatch(setUserProfile({ ...userProfile, email })) }}
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
                        onChangeText={(mobile_number) => { dispatch(setUserProfile({ ...userProfile, mobile_number })) }}
                        LeftChild={<PhoneIcon />}
                        style={styles.leftIconSpace}
                        containerStyle={styles.inputContainer}
                        titleStyle={styles.dropDownTitle}
                        value={mobile_number}
                        textInputContainerStyle={styles.textInputContainerStyle}
                    />
                    <DropDown
                        title={"Joining Date"}
                        placeholder={"Select Joining Date"}
                        calendar={true}
                        // onConfirm={(date) => dispatch(setBirthday(date.toISOString().split('T')[0]))}
                        placeholderStyle={styles.placeholderStyle}
                        containerStyle={styles.dropDownContainer}
                        LeftChild={<CalendarIcon style={styles.calendarIcon} />}
                        titleStyle={styles.dropDownTitle}
                        textInputContainerStyle={styles.textInputContainerStyle}
                        value={joining_date}
                    />

                    <DropDown
                        title={"Date of Birth"}
                        placeholder={"Select Date of Birth"}
                        calendar={true}
                        // onConfirm={(date) => dispatch(setBirthday(date.toISOString().split('T')[0]))}
                        placeholderStyle={styles.placeholderStyle}
                        containerStyle={styles.dropDownContainer}
                        LeftChild={<CalendarIcon style={styles.calendarIcon} />}
                        titleStyle={styles.dropDownTitle}
                        textInputContainerStyle={styles.textInputContainerStyle}
                        value={birthday}
                    />
                    {hasUnsavedChanges &&
                        <ButtonGradient onPress={() => onUpdate(otherId)} btnContainer={styles.btnContainer} style={styles.btn} textStyle={styles.btnTitle} title={'Update'} />
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        </ProfileScreenContainer>
    )

}

export default Profile