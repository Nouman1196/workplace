import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from "react-redux";
import styles from './styles';
import { loadMore, onUnmount, onMount, onRefresh } from '../../../redux/report/action';
import FlatlistHeader from './components/flatlistHeader';
import Content from './components/content';
import NothingToShow from '../../../components/emptyPage';
import ScreenContainer from '../../../components/screenContainer';
import FlatlistLoader from '../../../components/loader/flatListLoader/FlatliistLoader';
import SkeltonLoader from '../../../components/loader/skeltonLoader/report';

const Report = ({ navigation }) => {
    const { reportsData, listLoader, refresh, loading } = useSelector((state) => state.reportApi);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onMount()
        });
        return onUnmount
    }, [])

    return (
        <ScreenContainer>
            <FlatList
                data={reportsData}
                onEndReachedThreshold={0.5}
                onEndReached={loadMore}
                ListEmptyComponent= {loading ? <SkeltonLoader/> : <NothingToShow />}
                refreshing={refresh}
                contentContainerStyle={styles.contentContainer}
                onRefresh={onRefresh}
                ListFooterComponentStyle={styles.listFooterComponentStyle}
                ListFooterComponent={() => <FlatlistLoader loading={listLoader} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <FlatlistHeader />}
                renderItem={({ item, index }) => <Content key={index} navigation={navigation} {...item} />}
            />
        </ScreenContainer>
    );
};
export default Report;