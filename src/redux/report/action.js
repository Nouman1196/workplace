import { store } from "../../redux/store/store";
import { setWeeklyTime, setLoading, setCurrentPage, setLastPage, setReportsData, setRefresh, setListLoader, setStartDate, setEndDate, setEmployeeData, setIsShowWeeklyTime } from "./reducer";
import { getWeaklyReport } from "../../api/reports/reportsController";
import GradientColor from "../../theme/colors/gradientColor";
import { LaptopIcon, CoffeIcon, BuildingIcon } from "../../assets/svg";


export const onRefresh = async () => {
    store.dispatch(setRefresh(true))
    resetStates()
    await fetchData()
    store.dispatch(setRefresh(false))
}

export const onMount = async () => {
    store.dispatch(setLoading(true))
    resetStates()
    resetTitle()
    await fetchData()
    store.dispatch(setLoading(false))
}
export const onSearch = async() => {
    store.dispatch(setLoading(true))
    resetTitle()
    await fetchData()
    store.dispatch(setLoading(false))
}
const resetTitle = () => {
    const { start_date, end_date } = store.getState().reportApi
    if (start_date || end_date) {
        store.dispatch(setIsShowWeeklyTime(false))
    } else {
        store.dispatch(setIsShowWeeklyTime(true))
    }
}

export const fetchData = async (pageNo) => {
    const user_ids = store.getState().reportApi.employeeData?.id
    const { start_date, end_date } = store.getState().reportApi
    const params = {
        start_date,
        end_date,
        pageNo,
        user_ids
    }
    let response = await getWeaklyReport({ params })
    if (response !== 'Error') {
        store.dispatch(setCurrentPage(response?.data?.meta?.current_page))
        store.dispatch(setLastPage(response?.data?.meta?.total_pages))
        store.dispatch(setReportsData(response?.data?.report?.user_report))
        let weeklyTime = [
            {
                title: 'Working Time',
                details: response?.data?.report?.totalWorkingHour,
                Icon: <LaptopIcon />,
                color: GradientColor.breakTimeGradient
            },
            {
                title: 'Break Time',
                details: response?.data?.report?.totalBreakHour,
                Icon: <CoffeIcon />,
                color: GradientColor.workingTimeGradient
            },
            {
                title: 'Office Time',
                details: response?.data?.report?.totalOfficeHour,
                Icon: <BuildingIcon />,
                color: GradientColor.officeTimeGradient
            },
        ]
        store.dispatch(setWeeklyTime(weeklyTime))
    }
}
export const loadMore = async () => {
    const { currentPage, lastPage, reportsData, start_date, end_date } = store.getState().reportApi
    const user_ids = store.getState().reportApi.employeeData?.id
    if (currentPage !== lastPage) {
        let pageNo = currentPage + 1
        store.dispatch(setListLoader(true))
        let params = {
            start_date,
            end_date,
            pageNo,
            user_ids
        }
        let response = await getWeaklyReport({ params })
        if (response !== 'Error') {
            store.dispatch(setCurrentPage(response?.data?.meta?.current_page))
            store.dispatch(setLastPage(response?.data?.meta?.total_pages))
            store.dispatch(setReportsData(reportsData.concat(response.data.report.user_report)))
        }
        store.dispatch(setListLoader(false))
    }
}

export const workingHoursWarningText = (text, time) => {
    let hour = time / 3600
    if (typeof text == 'string') {
        let textArray = text.split(' ')
        if (textArray.some(item => item == 'Half') && hour < 4) {
            return true
        } else if (textArray.some(item => item == 'Quarter' && hour < 6)) {
            return true
        }
        else {
            return false
        }
    }
    else if (hour < 8) {
        return true
    }
    else {
        return false
    }
}

export const resetStates = () => {
    store.dispatch(setReportsData([]))
    store.dispatch(setIsShowWeeklyTime(true))
    store.dispatch(setStartDate(''))
    store.dispatch(setEndDate(''))
}

export const onUnmount = () => {
    store.dispatch(setEmployeeData({ id: '', name: '' }))
    resetStates()
}