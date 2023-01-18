import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import SwipeOut from "./components/swipeable";
import { notificationAction, loadMore, pullToRefresh } from "../../../redux/notifications/action";
import FlatlistLoader from "../../../components/loader/flatListLoader/FlatliistLoader";
import styles from "./styles";
import ListHeader from "./components/listHeader";

const Notifications = ({ navigation }) => {
    const { notifications, flatListLoader, refresh } = useSelector((state) => state.notificationsApi);

    useEffect(() => {
        notificationAction()
    }, [])

    return (
        <ScreenContainer>
            <FlatList
                data={notifications.length > 0 ? notifications : ['1']}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMore}
                refreshing={refresh}
                contentContainerStyle = {styles.contentContainerStyle}
                onRefresh={pullToRefresh}
                ListFooterComponent={<FlatlistLoader loading={flatListLoader} />}
                ListHeaderComponent={notifications?.length > 0 && <ListHeader />}
                ListHeaderComponentStyle={styles.listFooterLoader}
                renderItem={(e) => <SwipeOut notificationLength={notifications?.length} {...e} />}
            />
        </ScreenContainer>
    )
}

export default Notifications