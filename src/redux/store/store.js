import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';
import { blacklist, whitelist } from "./constant";
import { userReducer } from "../user/reducer";
import { loginReducer } from "../authentication/login/reducer";
import { messageReducer } from '../messages/reducer';
import { eventReducer } from '../events/reducer';
import { timerReducer } from "../timer/reducer"
import { dashboardReducer } from "../dashboard/reducer";
import { statusReducer } from '../status/reducer';
import { checkinBreakReducer } from '../checkin-break/reducer';
import { reportReducer } from '../report/reducer';
import { teamManagementReducer } from '../teamManagement/reducer';
import { employeeReducer } from '../employee/reducer';
import { attendanceReducer } from '../attendance/reducer';
import { onLeaveReducer } from '../onLeaves/reducer';
import { teamStatusReducer } from '../teamStatus/reducer';
import { notificationReducer } from '../notifications/reducer';
import { manageLeaveReducer } from '../manageLeaves/reducer';
import { addLeavesReducer } from '../addLeaves/reducer';
import { missedRequestsReducer } from '../missedRequests/reducer';
import { addEmployesReducer } from '../addEmployes/reducer';
import { signUpReducer } from '../authentication/signup/reducer';
import { skillsReducer } from '../skills/reducer';
import { projectReducer } from '../project/reducer';
import { departmentReducer } from '../department/reducer';
import { technologyReducer } from '../technologies/reducer';
import { designationReducer } from '../designation/reducer';
import { leaveTypeReducer } from '../leaveType/reducer';
import { publicHolidaysReducer } from '../publicHolidays/reducer';
import { profileReducer } from '../profile/reducer';
import { punchHistoriesReducer } from '../punchHistories/reducer';
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist,
    blacklist,
}
const appReducer = combineReducers({
    userApi: userReducer,
    loginApi: loginReducer,
    messageApi: messageReducer,
    eventsApi: eventReducer,
    timerApi: timerReducer,
    dashboardApi: dashboardReducer,
    statusApi: statusReducer,
    checkinBreakApi: checkinBreakReducer,
    reportApi: reportReducer,
    teamManagementApi: teamManagementReducer,
    employeeApi: employeeReducer,
    attendanceApi: attendanceReducer,
    onLeaveApi: onLeaveReducer,
    teamStatusApi: teamStatusReducer,
    notificationsApi: notificationReducer,
    manageLeaveApi: manageLeaveReducer,
    addLeavesApi: addLeavesReducer,
    missedRequestsApi: missedRequestsReducer,
    addEmployesApi: addEmployesReducer,
    signUpApi: signUpReducer,
    skillsApi: skillsReducer,
    projectApi: projectReducer,
    departmentApi: departmentReducer,
    technologyApi: technologyReducer,
    designationApi: designationReducer,
    leaveTypeApi: leaveTypeReducer,
    publicHolidaysApi: publicHolidaysReducer,
    profileApi: profileReducer,
    punchHistoriesApi: punchHistoriesReducer
})
const persistedReducer = persistReducer(persistConfig, appReducer)
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export const persistor = persistStore(store)