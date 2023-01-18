import { manageLeaveRequests, updateLeaveRequestApi } from "../../api/manageLeaves/manageLeavesController";
import { setLeavesData, setCurrentPage, setLastPage, setLoading, setLeavesIds, setFlatListLoader } from "./reducer";
import Color from "../../theme/colors/colors";
import { store } from "../store/store";


export const onMount = async() => {
    store.dispatch(setLoading(true))
    await fetchData()
    store.dispatch(setLoading(false))
}

export const fetchData = async () => {
    let { routes, index } = store.getState().manageLeaveApi
    let params = {
        status: routes[index].status
    }
    store.dispatch(setLoading(true))
    let response = await manageLeaveRequests({ params })
    if (response !== "Error") {
        store.dispatch(setLeavesData(response.data?.leave_requests))
        store.dispatch(setLastPage(response.data.meta.total_pages));
        store.dispatch(setCurrentPage(response.data.meta.current_page));
    }
    store.dispatch(setLoading(false))
}

export const onRefresh = async() => {
    store.dispatch(setFlatListLoader(true))
    await fetchData()
    store.dispatch(setFlatListLoader(true))
}

export const loadMore = () => {
    
}

export const colorsSelector = (type) => {
    if (type == "Approved") {
        return Color.approved
    } else if (type == "Deleted" || type == "Rejected") {
        return Color.rejected
    } else if (type == "Pending") {
        return Color.pending
    }
}

export const singleSelect = (id) => {
    const { leave_request_ids } = store.getState().manageLeaveApi
    if (leave_request_ids.includes(id)) {
        let index = leave_request_ids.indexOf(id)
        let array = [...leave_request_ids]
        array.splice(index, 1)
        return store.dispatch(setLeavesIds(array))
    } else {
        store.dispatch(setLeavesIds([...leave_request_ids, id]))
    }
}

export const multiSelect = () => {
    const { leavesData, leave_request_ids } = store.getState().manageLeaveApi
    if (leavesData.length !== leave_request_ids.length) {
        return store.dispatch(setLeavesIds(leavesData.map((item) => item.id)))
    } else {
        store.dispatch(setLeavesIds([]))
    }
}
export const checkSelected = (id) => {
    const { leave_request_ids } = store.getState().manageLeaveApi
    return leave_request_ids.includes(id)
}

export const updateLeaveRequest = async (type) => {
    const { leave_request_ids } = store.getState().manageLeaveApi
    let body = {
        leave_request_ids
    }
    let response = await updateLeaveRequestApi({ type, body })
    if (response !== "Error") {
        Toast.show(response.data.message, Toast.LONG)
        fetchData()
        resetStates()
    }
}

export const resetStates = () => {
    store.dispatch(setLeavesIds([]))
}