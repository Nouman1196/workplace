import { store } from "../store/store";
import { setLoading, setTeamManagementData } from "./reducer";
import { TeamManagementIcon, TeamLeavesIcon, TeamStatusIcon, TeamRequestIcon, SmallLeaveIcon, SmallPunchIcon } from '../../assets/svg';
import { teamManagementApi } from "../../api/teamManagement/teamManagementController";
import { setAbsentsCounts, setPresentsCounts } from "../attendance/reducer";
import { setFullCounts, setHalfCounts } from "../onLeaves/reducer";
import { setLateCounts, setBreakCounts } from "../teamStatus/reducer";

export const teamManagementAction = async () => {
    store.dispatch(setLoading(true))
    let response = await teamManagementApi()
    store.dispatch(setAbsentsCounts(response.data.users_absent_in_today_count))
    store.dispatch(setPresentsCounts(response.data.users_present_in_today_count))
    store.dispatch(setFullCounts(response.data.users_on_full_leave_today_count))
    store.dispatch(setHalfCounts(response.data.users_on_half_leave_today_count))
    store.dispatch(setLateCounts(response.data.users_late_comers_on_today_count))
    store.dispatch(setBreakCounts(response.data.users_now_on_break_count))
    if (response !== 'Error') {
        const listData = [
            {
                title: 'Team Attendance',
                Icon: <TeamManagementIcon small={true} />,
                leftKey: 'Present',
                navigation: 'Attendance',
                leftValue: response.data.users_present_in_today_count,
                rightKey: 'Absence',
                rightValue: response.data.users_absent_in_today_count,
                barColor: '#CC283D',
            },
            {
                title: 'Team Leaves',
                Icon: <TeamLeavesIcon />,
                leftKey: 'Full',
                navigation: 'TeamLeaves',
                leftValue: response.data.users_on_full_leave_today_count,
                rightKey: 'Half',
                rightValue: response.data.users_on_half_leave_today_count,
                barColor: '#0085A2',
            },
            {
                title: 'Team Status',
                Icon: <TeamStatusIcon />,
                leftKey: 'Break',
                navigation: 'TeamStatus',
                leftValue: response.data.users_now_on_break_count,
                rightKey: 'Late',
                rightValue: response.data.users_late_comers_on_today_count,
                barColor: '#046E31',
            },
            {
                title: 'Team Request',
                Icon: <TeamRequestIcon />,
                leftKey: <SmallLeaveIcon />,
                leftValue: 'Leave',
                rightKey: <SmallPunchIcon />,
                rightValue: 'Punch',
                barColor: '#FCB925',
                management: true
            }
        ]
        store.dispatch(setTeamManagementData(listData))
    }
    store.dispatch(setLoading(false))
}