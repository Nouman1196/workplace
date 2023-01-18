import { store } from "../store/store";
import Toast from 'react-native-simple-toast';
import { checkdIn, checkedOut, breakEnded, breakStarted } from "../../api/checkin-break/checkinBreakController";
import { setCheckedIn, setStartBreak, setLoading } from "../status/reducer";
import { setClockRefresh } from "../timer/reducer";
import { setOptionModal } from "./reducer";

export const CheckinCheckout = async () => {
    const { checkedIn } = store.getState().statusApi
    const { lat, long } = store.getState().checkinBreakApi
    const { company } = store.getState().userApi.userData?.user
    const { clockRefresh } = store.getState().timerApi
    let body = {
        lat: lat ? lat : company?.lat,
        long: long ? long : company?.long
    }

    store.dispatch(setOptionModal(false))
    await store.dispatch(setLoading(true))
    let response = checkedIn ? await checkedOut({ body }) : await checkdIn({ body })
    if (response !== 'Error') {
        await store.dispatch(setClockRefresh(!clockRefresh))
        await Toast.show(checkedIn ? 'Checkout Successfully' : 'Checkin Successfully', Toast.SHORT);
        await store.dispatch(setCheckedIn(checkedIn ? false : true))
    }
    setTimeout(() => {
        store.dispatch(setLoading(false))
    }, 1000);
}
export const BreakStartPause = async () => {
    const { startBreak } = store.getState().statusApi
    store.dispatch(setOptionModal(false))
    await store.dispatch(setLoading(true))
    const { clockRefresh } = store.getState().timerApi
    let response = startBreak ? await breakEnded() : await breakStarted()
    if (response !== 'Error') {
        store.dispatch(setClockRefresh(!clockRefresh))
        Toast.show(startBreak ? 'Break End Successfully' : 'Break Start Successfully', Toast.SHORT);
        store.dispatch(setStartBreak(startBreak ? false : true))
    }
    setTimeout(() => {
        store.dispatch(setLoading(false))
    }, 1000);
}