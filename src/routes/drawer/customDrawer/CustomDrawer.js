import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSelector } from "react-redux";
import { baseURLEritheia } from '../../../api/baseURL';
import { manageLeavesSub, manageEmployeesub, managemissedSub, manageCompanySub } from "../managerDrawer/customDrawer/dropdownOptions";
// import { Logout } from "../../../utilies/AsyncStorage/AsyncStorage";
import TextStyle from '../../../theme/textStyle/textStyle';
import Theme from '../../../theme/theme';
import ButtonGradient from '../../../components/buttons';
import { RequestIcon, ManageTeamIcon } from "../../../assets/svg";
import styles from './styles/styles';
import SubMenu from './components/subMenu.js/SubMenu';
import { requestSub } from "./components/dropdownOptions";

const CustomDrawer = (props) => {
    const { name, designation, profile_image_url, role } = useSelector((state) => state.userApi.userData.user);
    const [selectedIndex, setSelectedIndex] = useState('')
    const list = [
        {
            title: 'Request',
            subMenues: requestSub,
            LeftIcon: <RequestIcon />
        },
        {
            title: 'Manage Team',
            subMenues: manageEmployeesub,
            LeftIcon: <ManageTeamIcon />
        },
        {
            title: 'Manage Company',
            subMenues: manageCompanySub,
            LeftIcon: <RequestIcon />
        },
    ]



    return (
        <View style={Theme.container}>
            <SafeAreaView style={styles.dpContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} activeOpacity={0.8}>
                    <Image source={profile_image_url ? { uri: profile_image_url } : require('../../../assets/images/blankDp.png')} style={Theme.DrawerDpIcon} />
                </TouchableOpacity>
                {name &&
                    <Text style={styles.nameTitle}>{name}</Text>
                }
                {designation ?
                    <Text style={styles.designationTitle}>{designation}</Text>
                    : null
                }
            </SafeAreaView>
            <SafeAreaView style={styles.itemsContainer}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList labelStyle={Theme.drawerLabelText} {...props} />
                    {list.map((item, key) => (
                        <SubMenu key={key} index={key} selectedIndex={selectedIndex} setSelectedIndex={(e) => { setSelectedIndex(previousState => previousState === key ? '' : e) }} navigation={props.navigation} subMenues={item.subMenues} title={item.title} LeftIcon={item.LeftIcon} />
                    ))}
                </DrawerContentScrollView>
                <ButtonGradient onPress={() => { Logout({ navigation: props.navigation, direct: false }) }} style={Theme.logOut} textStyle={{ fontSize: 15 }} title={"Logout"} />
                <View style={Theme.drawerPoweredByTextContainer}>
                    <Text style={TextStyle.smallRegularBlackText}>Powered by </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(baseURLEritheia)}>
                        <Text style={TextStyle.smallRegularEritheiaBlueText}>Eritheia Labs</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};
export default CustomDrawer;