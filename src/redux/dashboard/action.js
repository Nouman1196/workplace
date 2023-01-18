import moment from 'moment';
import { getEventsAction } from "../events/actions";
import { createDashboardCard } from "../../api/dashboard/dashboardController";
import { setRefresh, setWidgetsData, setLoading } from "./reducer";
import { setClockRefresh } from '../timer/reducer';
import { setDate } from "../timer/reducer";
import { store } from '../store/store';
import { MonthlyAttendanceIcon, MonthlyHoursIcon, MonthlyLateIcon, RemainingLeavesIcon } from "../../assets/svg";
import { getProfileAction } from "../profile/action";

export const createDashboardWidgets = async () => {
    let response = await createDashboardCard()
    if (response !== 'Error') {
        let dashData = response.data
        let customWidgets =
            [
                {
                    id: 1,
                    title: 'Monthly Attendance',
                    count: dashData.monthly_attendance_count,
                    Icon: <MonthlyAttendanceIcon />,
                },
                {
                    id: 2,
                    title: 'Monthly Hours',
                    count: dashData.monthly_office_hours,
                    Icon: <MonthlyHoursIcon />,

                },
                {
                    id: 3,
                    title: 'Monthly Late',
                    count: dashData.monthly_late_count,
                    Icon: <MonthlyLateIcon />,
                },
                {
                    id: 4,
                    title: 'Remaining Leaves',
                    count: dashData.available_leaves,
                    Icon: <RemainingLeavesIcon />,
                }
            ]
        store.dispatch(setWidgetsData(customWidgets))
    }
}
export const dashboardAction = async () => {
    store.dispatch(setLoading(true))
    dateFunction()
    await createDashboardWidgets()
    await getEventsAction()
    store.dispatch(setLoading(false))
}
const dateFunction = () => {
    let date = new Date().toDateString().split(' ')
    date[0] = date[0] + ","
    store.dispatch(setDate(date.join(' ')))
}

export const getMarkedDatesAction = () => {
    const { eventsData, selectedDate } = store.getState().eventsApi
    const markedDates = {};
    eventsData.forEach((day,) => {
        let formattedDate = moment(day?.start_date).format('YYYY-MM-DD')//format(new Date(appointment.date));
        markedDates[formattedDate] = {
            ...markedDates[formattedDate],
            marked: true, selected: true, selectedColor: "#fff", title: day?.title
        };

    });
    markedDates[selectedDate] = {
        marked: true, selected: true, selectedColor: "#CC283D", selectedTextColor: "#FFFFFF"
    }
    return markedDates;
};

export const generateColor = () => {
    let color = ['#8D4FA9', '#0085A2', '#046E31', '#FFB000']
    return color[Math.floor(Math.random() * (color.length + 1))];
};

export const refreshProfile = async () => {
    const { clockRefresh } = store.getState().timerApi
    store.dispatch(setRefresh(true))
    await getProfileAction()
    store.dispatch(setClockRefresh(!clockRefresh))
    store.dispatch(setRefresh(false))

}