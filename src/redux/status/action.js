import { store } from "../store/store";
import { setCheckedIn, setStartBreak } from "./reducer";
import { getStatus } from "../../api/status/statusController";
import { setClockRefresh } from "../timer/reducer";

export const getStatusUser = async () => {
    const { clockRefresh } = store.getState().timerApi
    let response = await getStatus()
    if (response !== 'Error') {
        store.dispatch(setCheckedIn(response.data.check_status))
        store.dispatch(setStartBreak(response.data.break_status))
        store.dispatch(setClockRefresh(!clockRefresh))
    }
}