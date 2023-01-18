import React, { useEffect } from "react";
import {  FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import { leaveTypeAction } from "../../../../redux/leaveType/action";
import styles from "./styles";
import Content from "./components/content";
import ListHeader from "./components/listHeader";

const LeaveType = () => {
    const { leaveType } = useSelector((state) => state.leaveTypeApi);
    useEffect(() => {
        leaveTypeAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={leaveType}
                contentContainerStyle={styles.contentContainerStyle}
                ListHeaderComponent={ <ListHeader title1={"Name"} title2="Remainings" title3={"Limits"} />}
                renderItem={({ item, index }) => <Content key={index} {...item} />}
            />
        </ScreenContainer>
    )
}
export default LeaveType