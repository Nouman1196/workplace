import { store } from "../../redux/store/store";

export const splashAction = async ({ navigation }) => {
    setTimeout(() => {
        const { userData } = store.getState().userApi
        if (userData) {
            // navigation.replace('DrawerNavigation')
            navigation.replace('login')
        } else {
            navigation.replace('login')
        }
    }, 2000);
}