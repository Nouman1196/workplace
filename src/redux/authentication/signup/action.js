import { Keyboard } from "react-native";
import { SignUpScreen1Validation, SignUpScreen2Validation } from "../../../screen/authentication/components/formValidation";
import { store } from "../../../redux/store/store";
import { setErrorText, setTimeZonesList, setLoading } from "./reducer";
import { timeZonesData } from "../../../screen/authentication/signup/components/timeZones";
import { SignUp } from "../../../api/authentication/authenticationController";
import Toast from 'react-native-simple-toast';

export const signUpAction = async ({ navigation, type }) => {
    const { name, email, password, cPassword, website_url, time_zone, address, designation, companyName } = store.getState().signUpApi
    Keyboard.dismiss()
    let validate = SignUpScreen1Validation({ name, email, password, cPassword })
    store.dispatch(setErrorText(validate.errors))
    if (validate.valid) {
        navigation.navigate('SignUp1')
        let validate = SignUpScreen2Validation({ website_url, time_zone, address, designation, companyName })
        store.dispatch(setErrorText(validate.errors))
        if (validate.valid && type == 'submit') {
            let body = {
                company: {
                    name: companyName,
                    website_url,
                    time_zone,
                    address,
                    status: "ACTIVE",
                    users_attributes:
                        [{
                            name,
                            email,
                            designation,
                            password,
                            role: "company_admin",
                            joining_date: new Date()
                        }]
                }
            }
            store.dispatch(setLoading(true))
            let response = await SignUp({body}) 
            if (response !== "Error") {
                setTimeout(() => {
                    Toast.show(response.data.message, Toast.SHORT)
                }, 500)
                navigation.navigate('login');
            }
            store.dispatch(setLoading(false))
        }
    }
}

export const timeZoneSearch = (text) => {
    if (text) {
        const newData = timeZonesData.filter(
            (item) => {
                const itemData = item.value
                    ? item.value.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }
        );
        store.dispatch(setTimeZonesList(newData))
    } else {
        store.dispatch(setTimeZonesList(timeZonesData))
    }
}