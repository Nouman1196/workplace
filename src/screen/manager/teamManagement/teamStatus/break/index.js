import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../employee/employes/components/content";
import styles from "../../styles";
import { teamStatusAction } from "../../../../../redux/teamStatus/action";
import NothingToShow from "../../../../../components/emptyPage";

const Break = ({ route }) => {
    const { breaks, loading } = useSelector((state) => state.teamStatusApi)
    return (
        <FlatList
            data={breaks.length !== 0 ? breaks : [1]}
            refreshing={loading}
            onRefresh={teamStatusAction}
            contentContainerStyle={styles.contentContainer}
            renderItem={(e) => breaks.length !== 0 ? <Content navigation={route?.navigation} {...e} /> : <NothingToShow />}
        />
    )
}
export default Break