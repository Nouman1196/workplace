import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from './customDrawer/CustomDrawer';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../../theme/colors/colors';
import Theme from '../../../theme/theme/theme';
import DashboardHeader from '../../customHeader/dashboard/DashboardHeader';

const Drawer = createDrawerNavigator();

const ManagerDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ activeTintColor: Color.drawerActivetint }}
            drawerStyle={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50
            }}

            drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName="Home">
            <Drawer.Screen
                options={{

                    headerShown: true,
                    headerStyle: { backgroundColor: '#f5f5f5' },
                    header: (e) => DashboardHeader({ navigation: e?.scene?.descriptor?.navigation, name, profileImage, MarkAllRead }),
                    drawerIcon: ({ focused, size }) => (
                        <LinearGradient style={Theme.drawerLinearGradientContainer} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                            <MaterialCommunityIcons name='dots-grid' size={16} color={Color.white} />
                        </LinearGradient>
                    ),
                    title: 'Dashboard',
                    drawerContentStyle: Theme.alignItemCenter,
                    drawerLabelStyle: Theme.drawerLabelText,
                    unmountOnBlur: true
                }}
                name="DashBoard" component={DashBoard} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#f5f5f5' },
                    drawerIcon: ({ focused, size }) => (
                        <LinearGradient style={Theme.drawerLinearGradientContainer} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                            <MaterialCommunityIcons name='page-next-outline' size={16} color={Color.white} />
                        </LinearGradient>
                    ),
                    title: 'Report',
                    drawerContentStyle: Theme.alignItemCenter,
                    drawerLabelStyle: Theme.drawerLabelText,
                }}
                name="Report" component={Report} />
        </Drawer.Navigator>
    )
}
export default ManagerDrawer