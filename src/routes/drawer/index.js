import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import DashBoard from '../../screen/shared/dashboard';
import Color from '../../theme/colors/colors';
import { BellIcon, DashboardIcon, ReportIcon } from '../../assets/svg';
import Report from '../../screen/shared/report';
import styles from './styles';
import CustomDrawer from './customDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const { name } = useSelector((state) => state.userApi.userData?.user);

    return (
        <>
            <Drawer.Navigator
                screenOptions={{ activeTintColor: Color.drawerActivetint }}
                drawerContent={(props) => <CustomDrawer {...props} />}
                initialRouteName="Dashboard"
            >
                <Drawer.Screen
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Feather onPress={() => { navigation.toggleDrawer() }} color={Color.tintColor} name='menu' size={25} style={styles.drawerIcon} />
                        ),
                        headerRight: (e) => (
                            <TouchableOpacity style={styles.notificationIconContainer} onPress={() => navigation.navigate('Notifications')}>
                                <BellIcon read={true} />
                            </TouchableOpacity>
                        ),
                        drawerIcon: () => <View style={styles.dashboardIconContainer}><DashboardIcon /></View>,
                        drawerLabel: "Dashboard",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.headerTitleTint,
                        headerTitle: "Hello " + name.split(' ')[0] + "!",
                        headerStyle: styles.headerStyle,
                    })}

                    name="Dashboard" component={DashBoard} />

                <Drawer.Screen
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <Feather onPress={() => { navigation.toggleDrawer() }} color={Color.white} name='menu' size={25} style={styles.drawerIcon} />
                        ),
                        headerRight: (e) => (
                            <TouchableOpacity style={styles.notificationIconContainer} onPress={() => navigation.navigate('Notifications')}>
                                <BellIcon read={true} />
                            </TouchableOpacity>
                        ),
                        drawerIcon: () => <View style={styles.dashboardIconContainer}><ReportIcon /></View>,
                        drawerLabel: "Report",
                        headerTitle: name,
                        headerTitleStyle: styles.headerTitleWhite,
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerStyle: styles.headerStyleRed,
                    })}
                    name="Report" component={Report} />
            </Drawer.Navigator>
        </>
    )
}
export default DrawerNavigation;