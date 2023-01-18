import { store } from "../store/store";
import { getTeamStatus } from "../../api/teamStatus/teamStatusController";
import { setLate, setBreak, setBreakCounts, setLateCounts, setLoading } from "./reducer";

export const teamStatusAction = async () => {
    store.dispatch(setLoading(true))
    let response = await getTeamStatus()
    if (response !== "Error") {
        store.dispatch(setLate(response.data.users_late_comers_on_today))
        store.dispatch(setBreak(response.data.users_now_on_break))
        store.dispatch(setLateCounts(response.data.users_late_comers_on_today?.length))
        store.dispatch(setBreakCounts(response.data.users_now_on_break?.length))
    }
    store.dispatch(setLoading(false))
}