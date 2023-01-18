import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screen/splash';
import Login from '../../screen/authentication/login';
import DrawerNavigation from '../drawer';
import Color from '../../theme/colors/colors';
import { navigationRef } from '../rootNavigation';
import TeamManagement from '../../screen/manager/teamManagement';
import Employes from '../../screen/manager/employee/employes';
import styles from './styles';
import { SearchIcon, CrossIcon } from '../../assets/svg';
import { setSearchOpen } from '../../redux/employee/reducer';
import Report from '../../screen/shared/report';
import Attendance from '../../screen/manager/teamManagement/attendance';
import TeamLeaves from '../../screen/manager/teamManagement/onLeaves';
import TeamStatus from '../../screen/manager/teamManagement/teamStatus';
import Notifications from '../../screen/shared/notifications';
import Leaves from '../../screen/manager/teamLeaves';
import LeaveAdd from '../../screen/shared/leaves/leaveAdd';
import SignUp from '../../screen/authentication/signup/signUp';
import SignUp1 from '../../screen/authentication/signup/signUp1';
import AddEmployee from '../../screen/manager/employee/addEmploye/addEmployee';
import AddEmploye1 from '../../screen/manager/employee/addEmploye/addEmployee1';
import Skills from '../../screen/company/skills';
import Projects from '../../screen/company/projects';
import Departments from '../../screen/company/departments';
import Technologies from '../../screen/company/technologies';
import Designations from '../../screen/company/designations';
import LeaveType from '../../screen/shared/leaves/leaveTypes';
import PublicHolidays from '../../screen/shared/leaves/publicHolidays';
import Profile from '../../screen/shared/profile';
import PunchHistoryUser from '../../screen/shared/punch/punchHistoryUser';
import PunchHistoryManager from '../../screen/manager/punch/punchHistoryManager';
import PunchDetails from '../../screen/common/punch/components/punchDetails';
import PunchMissedManager from '../../screen/manager/punch/punchRequestMissed';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const dispatch = useDispatch()
    const { openSearch } = useSelector((state) => state.employeeApi);
    const { name } = useSelector((state) => state.reportApi.employeeData);
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Team Management", headerTitle: "Team Management", headerShadowVisible: false }} name="TeamManagement" component={TeamManagement} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Attendance", headerTitle: "Attendance", headerShadowVisible: false }} name="Attendance" component={Attendance} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Team Leaves", headerTitle: "Team Leaves", headerShadowVisible: false }} name="TeamLeaves" component={TeamLeaves} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Team Status", headerTitle: "Team Status", headerShadowVisible: false }} name="TeamStatus" component={TeamStatus} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Notifications", headerTitle: "Notifications", headerShadowVisible: false }} name="Notifications" component={Notifications} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Punch History Details", headerTitle: "Punch History Details", headerShadowVisible: false }} name="PunchDetails" component={PunchDetails} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Add Leaves", headerTitle: "Add Leaves", headerShadowVisible: false }} name="LeaveAdd" component={LeaveAdd} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Add Employee", headerTitle: "Add Employee", headerShadowVisible: false }} name="AddEmployee" component={AddEmployee} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Add Employee", headerTitle: "Add Employee", headerShadowVisible: false }} name="AddEmploye1" component={AddEmploye1} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Sign Up Form", headerTitle: "Sign Up Form", headerShadowVisible: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Sign Up Form", headerTitle: "Sign Up Form", headerShadowVisible: false }} name="SignUp1" component={SignUp1} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Missed Requests", headerTitle: "Missed Requests", headerShadowVisible: false }} name="PunchMissedManager" component={PunchMissedManager} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Skills", headerTitle: "Skills", headerShadowVisible: false }} name="Skills" component={Skills} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Projects", headerTitle: "Projects", headerShadowVisible: false }} name="Projects" component={Projects} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Technologies", headerTitle: "Technologies", headerShadowVisible: false }} name="Technologies" component={Technologies} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Departments", headerTitle: "Departments", headerShadowVisible: false }} name="Departments" component={Departments} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Designations", headerTitle: "Designations", headerShadowVisible: false }} name="Designations" component={Designations} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Leave Type", headerTitle: "Leave Type", headerShadowVisible: false }} name="LeaveType" component={LeaveType} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Public Holidays", headerTitle: "Public Holidays", headerShadowVisible: false }} name="PublicHolidays" component={PublicHolidays} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Employee Report", headerTitle: "Employee Report", headerShadowVisible: false, headerRight: () => openSearch ? <CrossIcon onPress={() => dispatch(setSearchOpen(false))} /> : <SearchIcon onPress={() => dispatch(setSearchOpen(true))} /> }} name="Employes" component={Employes} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, title: "Leaves Request", headerTitle: "Leaves Request", headerShadowVisible: false, headerRight: () => openSearch ? <CrossIcon onPress={() => dispatch(setSearchOpen(false))} /> : <SearchIcon onPress={() => dispatch(setSearchOpen(true))} /> }} name="leavesTeam" component={Leaves} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, headerShadowVisible: false, title: name, headerTitle: name }} name="EmployesReport" component={Report} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, headerShadowVisible: false, title: "Profile", headerTitle: "Profile" }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, headerShadowVisible: false, title: "Punch History", headerTitle: "Punch History" }} name="PunchHistoryUser" component={PunchHistoryUser} />
                <Stack.Screen options={{ headerStyle: styles.headerStyleRed, headerBackTitle: '', headerTintColor: Color.white, headerShadowVisible: false, title: "Punch History", headerTitle: "Punch History" }} name="PunchHistoryManager" component={PunchHistoryManager} />
                <Stack.Screen options={{ headerTitleAlign: 'center', headerTintColor: Color.darkRed, headerShadowVisible: false, headerShown: false }} name="DrawerNavigation" component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation