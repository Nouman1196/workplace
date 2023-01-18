import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import styles from "./styles";
import Content from "./components/content";
import NothingToShow from "../../../../components/emptyPage";
import { onMount, onRefresh, loadMore } from "../../../../redux/employee/action";
import FlatlistLoader from "../../../../components/loader/flatListLoader/FlatliistLoader";
import ListHeader from "./components/listHeader";
import SkeltonLoader from "../../../../components/loader/skeltonLoader/employes";

const Employes = ({ navigation }) => {
    const { employesData, refresh, listLoader, openSearch, loading } = useSelector((state) => state.employeeApi);

    useEffect(() => {
        onMount()
    }, [])

    return (
        <ScreenContainer>
            <FlatList
                data={employesData}
                onEndReachedThreshold={0.5}
                onEndReached={loadMore}
                ListEmptyComponent={loading ? <SkeltonLoader /> : <NothingToShow />}
                refreshing={refresh}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={styles.contentContainer}
                onRefresh={onRefresh}
                ListFooterComponentStyle={styles.listFooterComponent}
                ListHeaderComponent={openSearch && <ListHeader />}
                ListFooterComponent={() => <FlatlistLoader loading={listLoader} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <Content key={index} index={index} navigation={navigation} {...item} />}
            />
        </ScreenContainer>
    )
}

export default Employes