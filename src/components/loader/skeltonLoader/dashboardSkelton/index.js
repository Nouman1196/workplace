import React from 'react';
import { View } from 'react-native';
import Skelton from '..';
import { styles } from './styles';

const SkeltonLoader = ({ }) => {
    return (
        <View style={styles.container}>
            <Skelton style={styles.timeContainer} />
            <View style={styles.firstBlockContainer}>
                <Skelton style={styles.block} />
                <Skelton style={styles.block} />
            </View>
            <View style={styles.secondBlockContainer}>
                <Skelton style={styles.block} />
                <Skelton style={styles.block} />
            </View>
            <Skelton style={styles.timeBlock} />
            <Skelton style={styles.calendarBlock} />
        </View>
    )
}

export default SkeltonLoader