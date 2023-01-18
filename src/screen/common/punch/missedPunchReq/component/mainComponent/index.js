import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../components/content";
import NothingToShow from "../../../../../../components/emptyPage";
import styles from "./styles";
import ListHeader from "../../pending/components/listHeader";
import { onRefresh, loadMore } from "../../../../../../redux/missedRequests/action";
import FlatlistLoader from "../../../../../../components/loader/flatListLoader/FlatliistLoader";
import SkeltonLoader from "../../../../../../components/loader/skeltonLoader/punchReuestsSkelton";
const MainComponent = ({ route, pending }) => {
    const { missedRequestData, refresh, loading, flatListLoader } = useSelector((state) => state.missedRequestsApi);
    return (
        <>
                <FlatList
                    data={missedRequestData}
                    ListEmptyComponent={loading ? <SkeltonLoader /> : <NothingToShow />}
                    refreshing={refresh}
                    onRefresh={onRefresh}
                    ListHeaderComponent={pending ? <ListHeader /> : <></>}
                    onEndReached={loadMore}
                    onEndReachedThreshold={1}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => <FlatlistLoader loading={flatListLoader} />}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={(e) => <Content pending={pending} navigation={route?.navigation} {...e} />}
                />
        </>
    )
}
export default MainComponent