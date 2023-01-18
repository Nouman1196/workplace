import { getLeavesType } from "../../api/addLeaves/addLeavesController";
import { setLeaveType, setLoading } from "./reducer";
import { store } from "../store/store";

export const leaveTypeAction = async() => {
    store.dispatch(setLoading(true))
    let response = await getLeavesType()
    if (response !== "Error") {
        store.dispatch(setLeaveType(response.data.leave_types))
        store.dispatch(setLoading(false))
    }
}