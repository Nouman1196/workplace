import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles';

const Content = ({ name, remaining,limit }) => {

    return (
        <>
            <View style={styles.reportListMainContainer}>
                <View style={styles.reportItemContainer}>
                    <View style={styles.reportItemDetailsContainer}>
                        <View style={styles.reportItemSepratorContainer}>
                            <Text style={styles.reportContentInternalDesc}>{name}</Text>
                        </View>
                        <View style={styles.reportItemSepratorContainer}>
                            <Text style={styles.reportContentInternalDesc}>{remaining}</Text>
                        </View>
                        <View style={styles.reportItemSepratorContainer}>
                            <Text style={styles.reportContentInternalDesc}>{limit}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    );
};
export default Content;