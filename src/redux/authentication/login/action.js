import { Login } from "../../../api/authentication/authenticationController";
import { loginValidation } from "../../../screen/authentication/components/formValidation";
import { store } from "../../../redux/store/store";
import { setUserData } from "../../../redux/user/reducer";
import { setLoginLoader, setErrorText } from "../../authentication/login/reducer";
import { getProfileAction } from "../../../redux/profile/action";
// import getToken from "../../../firebase/getToken";
import Toast from 'react-native-simple-toast';

export const loginAction = async ({ navigation, email, password }) => {
    let validate = loginValidation({ email, password })
    store.dispatch(setErrorText(validate.errors))
    if (validate.valid) {
        store.dispatch(setLoginLoader(true))
        // let firebase_token = await getToken()
        let firebase_token = ""
        let body = {
            user: {
                email,
                password,
                firebase_token
            }
        }
        let response = await Login({ body })
        if (response !== "Error") {
            store.dispatch(setLoginLoader(false))
            setTimeout(() => {
                Toast.show(response.data?.meta?.message, Toast.SHORT)
            }, 100)
            store.dispatch(setUserData(response?.data))
            getProfileAction()
            navigation.replace('DrawerNavigation')
        }
        store.dispatch(setLoginLoader(false))
    }
}