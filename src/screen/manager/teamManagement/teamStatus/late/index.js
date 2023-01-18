import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../employee/employes/components/content";
import styles from "../../styles";
import { teamStatusAction } from "../../../../../redux/teamStatus/action";
import NothingToShow from "../../../../../components/emptyPage";

const Late = ({ route }) => {
    const { lates, loading } = useSelector((state) => state.teamStatusApi)
    return (
        <FlatList
            data={lates.length !== 0 ? lates : [1]}
            refreshing={loading}
            onRefresh={teamStatusAction}
            contentContainerStyle={styles.contentContainer}
            renderItem={(e) => lates.length !== 0 ? <Content navigation={route?.navigation} {...e} /> : <NothingToShow />}
        />
    )
}
export default Late