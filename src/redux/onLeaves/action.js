import { store } from "../store/store";
import { getTeamLeaves } from "../../api/onLeave/onLeaveController";
import { setFulls, setHalfs, setFullCounts, setHalfCounts, setLoading } from "./reducer";

export const onLeavesActions = async () => {
    store.dispatch(setLoading(true))
    let response = await getTeamLeaves()
    if (response !== "Error") {
        store.dispatch(setHalfs(response.data.users_on_half_leave_today))
        store.dispatch(setFulls(response.data.users_on_full_leave_today))
        store.dispatch(setFullCounts(response.data.users_on_full_leave_today?.length))
        store.dispatch(setHalfCounts(response.data.users_on_half_leave_today?.length))
    }
    store.dispatch(setLoading(false))
}