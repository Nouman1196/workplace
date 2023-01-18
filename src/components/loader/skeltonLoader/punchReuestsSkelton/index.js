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
                        <View style={styles.cardContentContainer}>
                            <View style={styles.individualContainer}>
                                <Skelton style={styles.name} />
                                <Skelton style={styles.punchStatus} />
                            </View>
                            <View style={styles.individualContainer}>
                                <Skelton style={styles.dateTime} />

                            </View>
                            <View style={styles.individualContainer}>
                                <Skelton style={styles.status} />
                            </View>
                        </View>
                        <Skelton style={styles.bar} />
                    </View>
                )}
            />

        </View>
    )
}

export default SkeltonLoader