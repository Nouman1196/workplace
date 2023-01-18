import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from "react-redux";
import styles from './styles';
import TimeCalculationsView from '../timeCalculationsView';
import SearchAreaView from './component/searchArea';

const FlatlistHeader = () => {
    const { weeklyTime, isShowWeeklyTime } = useSelector((state) => state.reportApi);
    return (
        <>
            <View>
                <Text style={styles.weeklyText}>{isShowWeeklyTime ? "Total Weekly Time" : "Total Time"}</Text>
                <FlatList
                    data={weeklyTime}
                    numColumns={3}
                    contentContainerStyle={styles.buttonHorizontal}
                    columnWrapperStyle={styles.btnColumnWrapper}
                    keyExtractor={({ id }, index) => index}
                    renderItem={({ item }) => <TimeCalculationsView {...item} />}
                />
            </View>
            <SearchAreaView />
        </>
    );
};
export default FlatlistHeader;