import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../content";
import NothingToShow from "../../../../../components/emptyPage";
import styles from "./styles";
import ListHeader from "../../pending/components/listHeader";
import { onRefresh, loadMore } from "../../../../../redux/manageLeaves/action";
import FlatlistLoader from "../../../../../components/loader/flatListLoader/FlatliistLoader";
import SkeltonLoader from "../../../../../components/loader/skeltonLoader/punchReuestsSkelton";
const MainComponent = ({ route, pending }) => {
    const { leavesData, refresh, loading, flatListLoader } = useSelector((state) => state.manageLeaveApi);
    return (
        <>
            {loading ?
                <SkeltonLoader />
                :
                <FlatList
                    data={leavesData.length !== 0 ? leavesData : [1]}
                    refreshing={refresh}
                    ListHeaderComponent={pending ? <ListHeader /> : <></>}
                    onRefresh={onRefresh}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<FlatlistLoader loading={flatListLoader} />}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={(e) => leavesData.length !== 0 ? <Content key={e.index} pending={pending} navigation={route?.navigation} {...e} /> : <NothingToShow />}
                />
            }
        </>
    )
}
export default MainComponent