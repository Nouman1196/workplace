import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../employee/employes/components/content";
import styles from "../../styles";
import { onLeavesActions } from "../../../../../redux/onLeaves/action";
import NothingToShow from "../../../../../components/emptyPage";

const HalfLeaves = ({ route }) => {
    const { halfs, loading } = useSelector((state) => state.onLeaveApi)
    return (
        <FlatList
            data={halfs.length !== 0 ? halfs : [1]}
            refreshing={loading}
            onRefresh={onLeavesActions}
            contentContainerStyle={styles.contentContainer}
            renderItem={(e) => halfs.length !== 0 ? <Content navigation={route?.navigation} {...e} /> : <NothingToShow />}
        />
    )
}
export default HalfLeaves