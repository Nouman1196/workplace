import Toast from 'react-native-simple-toast';
// import { Logout } from "../AsyncStorage/AsyncStorage";
import { store } from "../redux/store/store";
import { setMessageData, setShowMessage } from '../redux/messages/reducer';
import * as RootNavigation from "../routes/rootNavigation";

export const errorHandler = async (error) => {
    const navigation = RootNavigation
    try {
        if (error?.response?.status == 401) {
            setTimeout(() => {
                Toast.show(error?.response?.data?.message.toString(), Toast.SHORT)
            }, 300)
        } else if (error?.response?.status == 440) {
            // Logout({ navigation: navigation, direct: true })
            setTimeout(() => {
                Toast.show(error?.message ? error?.message : "Something Went wrong", Toast.SHORT)
            }, 300)
        } else if (error?.response?.status == 422) {
            setTimeout(() => {
                store.dispatch(setMessageData(error?.response?.data?.message))
                store.dispatch(setShowMessage(true))
                Toast.show(error?.response?.data?.message ? error?.response?.data?.message : "Something Went wrong", Toast.SHORT)
                setTimeout(() => {
                    store.dispatch(setShowMessage(false))
                }, 5000)
            }, 300)

        }
        else {
            setTimeout(() => {
                Toast.show(error?.message ? error?.message : "Something Went wrong", Toast.SHORT)
            }, 300)
        }

    } catch (error) {
        console.log(error);
    }

}
