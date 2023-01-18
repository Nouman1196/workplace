import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto';

export const userData = (dashData) =>
    [
        {
            id: 1,
            title: 'Monthly Attendance',
            count: dashData.monthly_attendance,
            fontFamily: Fontisto,
            fontName: 'checkbox-active',
            size: 20,
            iconColor: 'purple'
        },
        {
            id: 2,
            title: 'Monthly Hours',
            count: dashData.monthly_office_hours,
            fontFamily: AntDesign,
            fontName: 'clockcircleo',
            size: 20,
            iconColor: '#0085A2'

        },
        {
            id: 3,
            title: 'Monthly Late',
            count: dashData.monthly_late_count,
            fontFamily: FontAwesome,
            fontName: 'user',
            size: 20,
            iconColor: '#27AE60'
        },
        {
            id: 4,
            title: 'Remaining Leaves',
            count: dashData.available_leaves,
            fontFamily: AntDesign,
            fontName: 'calendar',
            size: 20,
            iconColor: '#FEB003'
        }

    ]