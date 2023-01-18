import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../employee/employes/components/content";
import styles from "../../styles";
import { attendanceAction } from "../../../../../redux/attendance/action";
import NothingToShow from "../../../../../components/emptyPage";

const Present = ({ route }) => {
    const { presents, loading } = useSelector((state) => state.attendanceApi)
    return (
        <FlatList
            data={presents.length !== 0 ? presents : [1]}
            refreshing={loading}
            onRefresh={attendanceAction}
            contentContainerStyle={styles.contentContainer}
            renderItem={(e) => presents.length !== 0 ? <Content navigation={route?.navigation} {...e} /> : <NothingToShow />}
        />
    )
}
export default Present