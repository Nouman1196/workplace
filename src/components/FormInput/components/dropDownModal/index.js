import React, { useState } from "react";
import { SafeAreaView, View, Text, Modal, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Color from "../../../../theme/colors/colors";
import Theme from "../../../../theme/theme";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "./styles";

const DropDownModal = ({ visible, setVisible, loading, data, title, onConfirm, isSearchable, onChangeText }) => {
    const [indexes, selectedIndex] = useState('')

    const onPressConfirm = () => {
        if (indexes !== "") {
            onConfirm(data[indexes])
        }
        setVisible(false)
    }
    return (
        <SafeAreaView style={Theme.container}>
            <Modal animationType='fade' onRequestClose={() => { setVisible(false) }} transparent={true} visible={visible} >
                <View style={styles.mainContainer}>
                    <View style={styles.internalContainer}>
                        <FlatList
                            data={loading ? [1] : data}
                            keyExtractor={(item) => item?.key}
                            ListHeaderComponent={<Header onChangeText={onChangeText} isSearchable={isSearchable} title={title} />}
                            contentContainerStyle={{ justifyContent: 'space-between' }}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <>
                                    {loading ?
                                        <View style={styles.activityIndicatorContainer}>
                                            <ActivityIndicator size={'small'} color={Color.red} animating={loading} />
                                        </View>
                                        :
                                        <TouchableOpacity activeOpacity={0.7} disabled={item.key ? false : true} onPress={() => { selectedIndex(index) }} style={styles.selectableBtnContainer}>
                                            {item.key &&
                                                <Fontisto size={20} color={Color.red} name={index === indexes ? "radio-btn-active" : 'radio-btn-passive'} />
                                            }
                                            <Text style={[item.key ? styles.listText : styles.listDisableText, { marginLeft: item.key ? 15 : 0 }]}>{item?.value}</Text>
                                        </TouchableOpacity>
                                    }
                                </>
                            )}
                        />
                        <Footer onPressCancel={() => { setVisible(false) }} onPressOk={onPressConfirm} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default DropDownModal