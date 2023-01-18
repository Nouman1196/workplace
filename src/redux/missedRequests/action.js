import Toast from 'react-native-simple-toast';
import { store } from "../store/store";
import Color from "../../theme/colors/colors";
import { updatePunchReq, getEmployesPunchHistoriesApi } from "../../api/punchRequest/punchRequestController";
import { setMissedRequestsData, setRoutes, setCurrentPage, setLoading, setLastPage, setHistoryIds, setRefresh, setFlatListLoader } from "./reducer";

export const onMount = async () => {
    store.dispatch(setLoading(true))
    await fetchRequests()
    store.dispatch(setLoading(false))
}


const fetchRequests = async () => {
    let { routes, index } = store.getState().missedRequestsApi
    let params = {
        tabs: routes[index].status
    }
    let response = await getEmployesPunchHistoriesApi({ params })
    if (response !== "Error") {
        store.dispatch(setMissedRequestsData(response.data?.histories))
        store.dispatch(setLastPage(response.data.meta.total_pages));
        store.dispatch(setCurrentPage(response.data.meta.current_page));
        store.dispatch(setRoutes([
            { key: 'Request', title: 'All', status: 'all', count: response.data.meta.total },
            { key: 'Approved', title: 'Approved', status: 'active', count: response.data.meta.active },
            { key: 'Rejected', title: 'Rejected', status: 'rejected', count: response.data.meta.rejected },
            { key: 'Pending', title: 'Pending', status: 'pending', count: response.data.meta.pending },
        ]
        ));
    }
}

export const loadMore = async () => {
    let { missedRequestData, routes, index, currentPage, lastPage } = store.getState().missedRequestsApi
    if (currentPage !== lastPage) {
        let page = currentPage + 1
        let params = {
            tabs: routes[index].status,
            page
        }
        store.dispatch(setFlatListLoader(true))
        let response = await getEmployesPunchHistoriesApi({ params })
        if (response !== "Error") {
            store.dispatch(setMissedRequestsData(missedRequestData.concat(response.data?.histories)))
            store.dispatch(setLastPage(response.data.meta.total_pages));
            store.dispatch(setCurrentPage(response.data.meta.current_page));
        }
        store.dispatch(setFlatListLoader(false))
    }
}

export const onRefresh = async () => {
    store.dispatch(setRefresh(true))
    await fetchRequests()
    store.dispatch(setRefresh(false))
}



export const colorsSelector = (type) => {
    if (type == "active") {
        return Color.approved
    } else if (type == "rejected" || type == "deleted") {
        return Color.rejected
    } else if (type == "pending") {
        return Color.pending
    }
}
export const historyType = (type) => {
    if (type == 1) {
        return { title: 'Check-In', color: Color.approved }
    } else if (type == 2) {
        return { title: 'Check-Out', color: Color.themeBlue }
    } else if (type == 3) {
        return { title: 'Break-Start', color: Color.pending }
    } else if (type == 4) {
        return { title: 'Break-End', color: Color.red }
    }
}

export const singleSelect = (id) => {
    const { history_ids } = store.getState().missedRequestsApi
    if (history_ids.includes(id)) {
        let index = history_ids.indexOf(id)
        let array = [...history_ids]
        array.splice(index, 1)
        return store.dispatch(setHistoryIds(array))
    } else {
        store.dispatch(setHistoryIds([...history_ids, id]))
    }
}

export const multiSelect = () => {
    const { missedRequestData, history_ids } = store.getState().missedRequestsApi
    if (missedRequestData.length !== history_ids.length) {
        return store.dispatch(setHistoryIds(missedRequestData.map((item) => item.id)))
    } else {
        store.dispatch(setHistoryIds([]))
    }
}
export const checkSelected = (id) => {
    const { history_ids } = store.getState().missedRequestsApi
    return history_ids.includes(id)
}

export const updatePunchRequest = async (type) => {
    const { history_ids } = store.getState().missedRequestsApi
    let body = {
        history_ids
    }
    let response = await updatePunchReq({ type, body })
    if (response !== "Error") {
        Toast.show(response.data.message, Toast.LONG)
        punchReqAction()
        resetStates()
    }
}

export const resetStates = () => {
    store.dispatch(setHistoryIds([]))
}