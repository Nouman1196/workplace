import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";
import { baseURLEritheia } from '../../../../api/baseURL';
import { manageLeavesSub, manageEmployeesub, managemissedSub, manageCompanySub } from "./dropdownOptions";
// import { Logout } from "../../../utilies/AsyncStorage/AsyncStorage";
import TextStyle from '../../../../theme/textStyle/TextStyle';
import Color from '../../../../theme/colors/colors';
import Theme from '../../../../theme/theme/theme';
import GradientColor from '../../../../theme/colors/gradientColor';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGradient from '../../../../components/buttons/ButtonGradient';

const ManagerCustomDrawer = (props) => {
    const { name, designation, profile_image_url, role } = useSelector((state) => state.userApi.userData.user);
    const [showDropdown, setShowDropdown] = useState(false);
    const [missedDropDown, setMissedDropDown] = useState(false);
    const [employeeDropdown, setEmployeeDropdown] = useState(false);
    const [companyDropDown, setCompanyDropdown] = useState(false);


    return (
        <SafeAreaView style={[Theme.container, { borderTopRightRadius: 50, borderBottomRightRadius: 50 }]}>
            <View style={Theme.DrawerDpContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} activeOpacity={0.8}>
                    <Image source={profile_image_url ? { uri: profile_image_url } : require('../../../../assets/images/blankDp.png')} style={Theme.DrawerDpIcon} />
                </TouchableOpacity>
                {name &&
                    <Text style={Theme.drawerNameText}>{name}</Text>
                }
                {designation ?
                    <Text style={TextStyle.mediumRegularBlackText}>{designation}</Text>
                    : null
                }
            </View>
            <View style={Theme.drawerSecondContainer}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList labelStyle={Theme.drawerLabelText} {...props} />
                    <View style={{ marginHorizontal: 17, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LinearGradient style={[Theme.drawerLinearGradientContainer, { paddingHorizontal: 6 }]} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                <FontAwesome name='calendar' size={16} color={Color.white} />
                            </LinearGradient>
                            <TouchableOpacity activeOpacity={1} onPress={() => { employeeDropdown && setEmployeeDropdown(false), setShowDropdown(!showDropdown) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12, flex: 1 }}>
                                <Text style={[TextStyle.mediumRegularBlackText, { fontWeight: '600' }]}>Leaves</Text>
                                <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => { employeeDropdown && setEmployeeDropdown(false), setShowDropdown(!showDropdown) }} >
                                    <MaterialCommunityIcons color={'red'} size={20} name={showDropdown ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} />

                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        {showDropdown &&
                            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                                {manageLeavesSub.map((item, key) => (
                                    <TouchableOpacity key={key} onPress={() => props.navigation.navigate(item.navigation)} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                                        <LinearGradient style={{ borderRadius: 100, padding: 4 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                            <MaterialCommunityIcons name={item.icon} size={14} color={Color.white} />
                                        </LinearGradient>
                                        <Text style={[TextStyle.mediumRegularBlackText, { marginLeft: 7 }]}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }

                    </View>
                    <View style={{ marginHorizontal: 17, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LinearGradient style={[Theme.drawerLinearGradientContainer, { paddingHorizontal: 6 }]} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                <FontAwesome name='check-square-o' size={16} color={Color.white} />
                            </LinearGradient>
                            <TouchableOpacity activeOpacity={1} onPress={() => { missedDropDown && setMissedDropDown(false), setMissedDropDown(!missedDropDown) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12, flex: 1 }}>
                                <Text style={[TextStyle.mediumRegularBlackText, { fontWeight: '600' }]}>Requests</Text>
                                <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => { missedDropDown && setMissedDropDown(false), setMissedDropDown(!missedDropDown) }}>
                                    <MaterialCommunityIcons color={'red'} size={20} name={missedDropDown ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        {missedDropDown &&
                            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                                {managemissedSub.map((item, key) => (
                                    <TouchableOpacity key={key} onPress={() => props.navigation.navigate(item.navigation)} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                                        <LinearGradient style={{ borderRadius: 100, padding: 4 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                            <MaterialCommunityIcons name={item.icon} size={14} color={Color.white} />
                                        </LinearGradient>
                                        <Text style={[TextStyle.mediumRegularBlackText, { marginLeft: 7 }]}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }
                    </View>
                    <View style={{ marginHorizontal: 17, marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LinearGradient style={Theme.drawerLinearGradientContainer} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                <FontAwesome name='users' size={16} color={Color.white} />
                            </LinearGradient>
                            <TouchableOpacity activeOpacity={1} onPress={() => { employeeDropdown && setEmployeeDropdown(false), setEmployeeDropdown(!employeeDropdown) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12, flex: 1 }}>
                                <Text style={[TextStyle.mediumRegularBlackText, { fontWeight: '600' }]}>Manage Team</Text>
                                <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => { employeeDropdown && setEmployeeDropdown(false), setEmployeeDropdown(!employeeDropdown) }}>
                                    <MaterialCommunityIcons color={'red'} size={20} name={employeeDropdown ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        {employeeDropdown &&
                            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                                {manageEmployeesub.map((item, key) => (
                                    <TouchableOpacity key={key} onPress={() => props.navigation.navigate(item.navigation)} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                                        <LinearGradient style={{ borderRadius: 100, padding: 4 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                            <item.FontFamily name={item.icon} size={14} color={Color.white} />
                                        </LinearGradient>
                                        <Text style={[TextStyle.mediumRegularBlackText, { marginLeft: 7 }]}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }
                    </View>

                    <View style={{ marginHorizontal: 17, marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LinearGradient style={Theme.drawerLinearGradientContainer} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                <FontAwesome name='check-square-o' size={16} color={Color.white} />
                            </LinearGradient>
                            <TouchableOpacity activeOpacity={1} onPress={() => { showDropdown && setShowDropdown(false), setCompanyDropdown(!companyDropDown) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12, flex: 1 }}>
                                <Text style={[TextStyle.mediumRegularBlackText, { fontWeight: '600' }]}>Manage Company</Text>
                                <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => { showDropdown && setShowDropdown(false), setCompanyDropdown(!companyDropDown) }}>
                                    <MaterialCommunityIcons color={'red'} size={20} name={companyDropDown ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        {companyDropDown &&

                            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                                {manageCompanySub.map((item, key) => (
                                    <TouchableOpacity key={key} onPress={() => props.navigation.navigate(item.navigation)} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                                        <LinearGradient style={{ borderRadius: 100, padding: 4 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient}>
                                            <item.FontFamily name={item.icon} size={14} color={Color.white} />
                                        </LinearGradient>
                                        <Text style={[TextStyle.mediumRegularBlackText, { marginLeft: 7 }]}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }

                    </View>

                </DrawerContentScrollView>
                <ButtonGradient onPress={() => { Logout({ navigation: props.navigation, direct: false }) }} style={Theme.logOut} textStyle={{ fontSize: 15 }} title={"Logout"} />
                <View style={Theme.drawerPoweredByTextContainer}>
                    <Text style={TextStyle.smallRegularBlackText}>Powered by </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(baseURLEritheia)}>
                        <Text style={TextStyle.smallRegularEritheiaBlueText}>Eritheia Labs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ManagerCustomDrawer;