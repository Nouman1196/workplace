import { store } from "../store/store";
import { getTeamAttendance } from "../../api/attendance/attendanceController";
import { setAbsents, setPresents, setLoading, setAbsentsCounts, setPresentsCounts } from "./reducer";

export const attendanceAction = async () => {
    store.dispatch(setLoading(true))
    let response = await getTeamAttendance()
    if (response !== "Error") {
        store.dispatch(setAbsents(response.data.users_not_check_in_today))
        store.dispatch(setPresents(response.data.users_check_in_today))
        store.dispatch(setPresentsCounts(response.data.users_check_in_today?.length))
        store.dispatch(setAbsentsCounts(response.data.users_not_check_in_today?.length))
    }
    store.dispatch(setLoading(false))
}