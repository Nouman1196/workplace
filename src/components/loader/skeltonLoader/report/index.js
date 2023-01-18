import React from 'react';
import { View, FlatList } from 'react-native';
import Skelton from '..';
import { styles } from './styles';

const SkeltonLoader = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7]}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <View style={styles.cardContainer}>
                        <Skelton style={styles.bar} />
                        <>
                            <View style={styles.mainView}>
                                <View style={styles.internalView}>
                                    <Skelton style={styles.title} />
                                    <Skelton style={styles.description} />
                                </View>
                                <View style={styles.internalView}>
                                    <Skelton style={styles.title} />
                                    <Skelton style={styles.description} />
                                </View>
                            </View>
                            <View style={styles.mainView}>
                                <View style={styles.internalView}>
                                    <Skelton style={styles.title} />
                                    <Skelton style={styles.description} />
                                </View>
                                <View style={styles.internalView}>
                                    <Skelton style={styles.title} />
                                    <Skelton style={styles.description} />
                                </View>
                            </View>
                        </>
                    </View>
                )}
            />

        </View>
    )
}

export default SkeltonLoader