import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const manageLeavesSub = [
    {
        title: 'Add Leave',
        navigation: 'AddLeave',
        icon: 'calendar-plus'
    },
    {
        title: 'Leaves Type',
        navigation: 'LeaveType',
        icon: 'format-list-checkbox'
    },
    {
        title: 'Leave History',
        navigation: 'LeaveHistory',
        icon: 'calendar-text'
    },
    {
        title: 'Public Holidays',
        navigation: 'Holiday',
        icon: 'calendar-text'

    },
]
export const manageEmployeesub = [

    {
        title: 'Leaves',
        navigation: 'Leaves',
        icon: 'calendar',
        FontFamily: AntDesign
    },

    {
        title: 'Employees',
        navigation: 'Employees',
        icon: 'users',
        FontFamily: Feather
    },
    {
        title: 'Add Employee',
        navigation: 'AddEmployees',
        icon: 'adduser',
        FontFamily: AntDesign
    },
    {
        title: 'Punch Request',
        navigation: 'AddPunch',
        icon: 'add-task',
        FontFamily: MaterialIcons
    },

    {
        title: 'Missed Request',
        navigation: 'MissedReqDetail',
        icon: 'file-document-multiple-outline',
        FontFamily: MaterialCommunityIcons
    },
]

export const managemissedSub = [
    {
        title: 'Punch Request',
        navigation: 'AddPunch',
        icon: 'square-edit-outline'
    },
    {
        title: 'Punch History',
        navigation: 'PunchHistory',
        icon: 'calendar-plus'
    },
]

export const manageCompanySub = [
    {
        title: 'Skills',
        navigation: 'AddSkill',
        icon: 'sunset',
        FontFamily: Feather
    },
    {
        title: 'Projects',
        navigation: 'CreateProject',
        icon: 'project',
        FontFamily: Octicons
    },
    {
        title: 'Department',
        navigation: 'AddDepartment',
        icon: 'building-o',
        FontFamily: FontAwesome
    },
    {
        title: 'Technologies',
        navigation: 'AddTechnology',
        icon: 'stack',
        FontFamily: Octicons
    },
    {
        title: 'Designations',
        navigation: 'AddDesignation',
        icon: 'user-graduate',
        FontFamily: FontAwesome5
    },
    // {
    //     title: 'Add Events',
    //     navigation: 'AddEvent',
    //     icon: 'add-task',
    //     FontFamily: MaterialIcons
    // }
]