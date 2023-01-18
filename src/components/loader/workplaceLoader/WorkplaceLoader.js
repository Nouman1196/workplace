import React from 'react';
import { View, Modal, Image } from 'react-native';
import styles from './styles/styles';

const WorkplaceLoader = ({ loading }) => {
    return (
        <>
            {loading &&
                <Modal animationType='fade' transparent={true} visible={loading}>
                    <View style={styles.container}>
                        <Image resizeMode='contain' style={styles.workplaceGif} source={require('../../../assets/gifs/WorkPlaces.gif')} />
                    </View>
                </Modal>
            }
        </>
    )
}
export default WorkplaceLoader