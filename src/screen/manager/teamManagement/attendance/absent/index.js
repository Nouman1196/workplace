import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../employee/employes/components/content";
import styles from "../../styles";
import { attendanceAction } from "../../../../../redux/attendance/action";
import NothingToShow from "../../../../../components/emptyPage";

const Absent = ({ route }) => {
    const { absents, loading } = useSelector((state) => state.attendanceApi)
    return (
        <FlatList
            data={absents.length !== 0 ? absents : [1]}
            refreshing={loading}
            onRefresh={attendanceAction}
            contentContainerStyle={styles.contentContainer}
            renderItem={(e) => absents.length !== 0 ? <Content navigation={route?.navigation} {...e} /> : <NothingToShow />}
        />
    )
}
export default Absent