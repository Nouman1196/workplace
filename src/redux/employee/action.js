import { store } from "../store/store";
import { getEmployeesApi, searchEmployeeApi } from "../../api/employee/employesController";
import { setEmployesData, setCurrentPage, setLastPage, setFlatlistLoader, setLoading, setRefresh } from "./reducer";
export const fetchData = async () => {
    store.dispatch(setRefresh(true))
    let response = await getEmployeesApi({})
    if (response !== "Error") {
        store.dispatch(setEmployesData(response?.data.users));
        store.dispatch(setLastPage(response?.data?.meta?.total_pages))
        store.dispatch(setCurrentPage(response?.data?.meta?.current_page))
    }
    store.dispatch(setRefresh(false))
}

export const onMount = async () => {
    store.dispatch(setLoading(true))
    await fetchData()
    store.dispatch(setLoading(false))
}

export const onRefresh = async () => {
    store.dispatch(setFlatlistLoader(true))
    await fetchData()
    store.dispatch(setFlatlistLoader(false))

}

export const loadMore = async () => {
    const { currentPage, lastPage, searchKeywords, employesData } = store.getState().employeeApi
    if (currentPage !== lastPage) {
        let page = currentPage + 1
        store.dispatch(setFlatlistLoader(true))
        let params = {
            search: searchKeywords,
            page
        }
        let response = searchKeywords.length > 0 ? await searchEmployeeApi({ params }) : await getEmployeesApi({ params })
        if (response !== 'Error') {
            store.dispatch(setEmployesData(employesData.concat(response.data.users)));
            store.dispatch(setLastPage(response?.data?.meta?.total_pages))
            store.dispatch(setCurrentPage(response?.data?.meta?.current_page))
        }
        store.dispatch(setFlatlistLoader(false))
    }
}

export const generateRandomColor = () => {
    let color = ['#8D4FA9', '#0085A2', '#046E31', '#FFB000']
    return color[Math.floor(Math.random() * (color.length))];
}