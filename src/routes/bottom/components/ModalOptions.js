import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import Theme from '../../../theme/theme';
import Color from '../../../theme/colors/colors';
import FloatingOptionButton from './FloatingOptionButton';
import { BreakStartPause, CheckinCheckout } from '../../../redux/checkin-break/action';
import { setOptionModal } from '../../../redux/checkin-break/reducer';

const ModalOptions = () => {
    const dispatch = useDispatch()
    const { optionModal } = useSelector((state) => state.checkinBreakApi);
    const { checkedIn, startBreak, loading } = useSelector((state) => state.statusApi);
    return (
        <Modal onRequestClose={() => dispatch(setOptionModal(false))} animationType='fade' transparent={true} visible={optionModal} >
            <View style={Theme.modalViewContainerTransparent}>
                <TouchableOpacity onPress={() => dispatch(setOptionModal(false))} style={Theme.flexOne} />
                <View style={{ alignSelf: 'flex-end' }}>
                    <View style={{ marginLeft: '-20%' }}>
                        <LinearGradient style={{ ...Theme.bottomBarModalButtonGradientContainer, marginBottom: -15, marginLeft: 10, justifyContent: 'center' }} colors={!startBreak && checkedIn ? ['#0085A2', '#0085A2'] : ['#B0B0B0', '#B0B0B0']}>
                            <TouchableOpacity onPress={CheckinCheckout} disabled={startBreak || !checkedIn || loading} style={{ padding: 10 }}>
                                <MaterialIcons size={25} style={{ marginLeft: 3 }} color={Color.white} name='logout' />
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient style={{ ...Theme.bottomBarModalButtonGradientContainer, marginLeft: -50 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={!checkedIn ? ['#B0B0B0', '#B0B0B0'] : startBreak ? ['#FF4C4C', '#B42025'] : ['#FFB000', '#FCB925']} >
                            <TouchableOpacity onPress={BreakStartPause} disabled={!checkedIn || loading} style={{ padding: 10 }}>
                                <MaterialIcons size={25} color={Color.white} name='local-restaurant' />
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient style={{ ...Theme.bottomBarModalButtonGradientContainer, marginLeft: -80 }} start={{ x: 0, y: 1 }} end={{ x: 1.2, y: 1 }} colors={!startBreak && !checkedIn ? ['#5C9374', '#25D56F'] : ['#B0B0B0', '#B0B0B0']} >
                            <TouchableOpacity onPress={CheckinCheckout} disabled={checkedIn || loading} style={{ padding: 10, }}>
                                <MaterialIcons size={25} color={Color.white} name='login' />
                            </TouchableOpacity>
                        </LinearGradient>
                        <FloatingOptionButton />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default ModalOptions