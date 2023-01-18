import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from '../../../../../theme/textStyle/textStyle';
import Color from '../../../../../theme/colors/colors';
import GradientColor from '../../../../../theme/colors/gradientColor';
import styles from '../../../styles';
const SubMenu = ({ navigation, LeftIcon, title, subMenues, setSelectedIndex, selectedIndex, index }) => {

    return (
        <View style={{ marginHorizontal: 17, marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {LeftIcon}
                <TouchableOpacity onPress={() => setSelectedIndex(index)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12, flex: 1 }}>
                    <Text style={styles.drawerLabelStyle}>{title}</Text>
                    <TouchableOpacity style={{ borderRadius: 20 }} onPress={() => { }} >
                        {/* <MaterialCommunityIcons color={'red'} size={20} name={showDropdown ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} /> */}
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            {selectedIndex === index ?
                <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                    {subMenues.map((item, key) => (
                        <TouchableOpacity key={key} onPress={() => {navigation.navigate(item.navigation)}} activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                            <LinearGradient style={{ borderRadius: 100, padding: 4 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={GradientColor.themeGradient} >
                                <MaterialCommunityIcons name={item.icon} size={14} color={Color.white} />
                            </LinearGradient>
                            <Text style={styles.drawerSubLabelStyle}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                : null
            }
        </View>

    );
};
export default SubMenu;