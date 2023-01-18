import { store } from "../../redux/store/store";
import Color from "../../theme/colors/colors";
import { getUserPunchHistoriesApi, getEmployesPunchHistoriesApi } from "../../api/punchRequest/punchRequestController";
import { setPunchHistories, setCurrentPage, setLastPage, setLoading, setRefresh, setRoutes, setFlatListLoader, setIsUser } from './reducer';


export const onMount = async ({ isUser }) => {
    store.dispatch(setIsUser(isUser))
    store.dispatch(setLoading(true))
    await fetchHistories()
    store.dispatch(setLoading(false))
}

export const onRefresh = async () => {
    store.dispatch(setRefresh(true))
    await fetchHistories()
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


export const fetchHistories = async () => {
    let { routes, index, isUser } = store.getState().punchHistoriesApi

    let params = {
        tabs: routes[index].status
    }
    let response = isUser ? await getUserPunchHistoriesApi({ params }) : await getEmployesPunchHistoriesApi({ params })
    if (response !== "Error") {
        store.dispatch(setPunchHistories(response.data?.histories))
        store.dispatch(setLastPage(response.data.meta.total_pages));
        store.dispatch(setCurrentPage(response.data.meta.current_page));
        store.dispatch(setRoutes([
            { key: 'Total', title: 'All', status: 'all', count: response.data.meta.total },
            { key: 'Active', title: 'Active', status: 'active', count: response.data.meta.active },
            { key: 'Rejected', title: 'Rejected', status: 'rejected', count: response.data.meta.rejected },
            { key: 'Pending', title: 'Pending', status: 'pending', count: response.data.meta.pending },
        ]))
    }
}
export const loadMore = async () => {
    let { punchHistories, routes, index, currentPage, lastPage, isUser } = store.getState().punchHistoriesApi
    if (currentPage !== lastPage) {
        let page = currentPage + 1
        let params = {
            tabs: routes[index].status,
            page
        }
        store.dispatch(setFlatListLoader(true))
        let response = isUser ? await getUserPunchHistoriesApi({ params }) : await getEmployesPunchHistoriesApi({ params })
        if (response !== "Error") {
            store.dispatch(setPunchHistories(punchHistories.concat(response.data?.histories)))
            store.dispatch(setLastPage(response.data.meta.total_pages));
            store.dispatch(setCurrentPage(response.data.meta.current_page));
        }
        store.dispatch(setFlatListLoader(false))
    }
}