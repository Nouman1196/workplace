import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../components/content";
import NothingToShow from "../../../../../../components/emptyPage";
import styles from "./styles";
import SkeltonLoader from "../../../../../../components/loader/skeltonLoader/punchReuestsSkelton";
import FlatlistLoader from "../../../../../../components/loader/flatListLoader/FlatliistLoader";
import { onRefresh, loadMore } from "../../../../../../redux/punchHistories/action";
const MainComponent = ({ route }) => {
    const { punchHistories, refresh, loading, flatListLoader } = useSelector((state) => state.punchHistoriesApi);
    return (
        <>
            {loading ?
                <SkeltonLoader />
                :
                <FlatList
                    data={punchHistories}
                    ListEmptyComponent={NothingToShow}
                    refreshing={refresh}
                    onRefresh={onRefresh}
                    onEndReached={loadMore}
                    onEndReachedThreshold={1}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => <FlatlistLoader loading={flatListLoader} />}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={(e) => <Content navigation={route?.navigation} {...e} />}
                />
            }
        </>
    )
}
export default MainComponent