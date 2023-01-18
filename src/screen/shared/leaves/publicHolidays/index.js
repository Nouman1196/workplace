import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import { publicHolidaysAction } from "../../../../redux/publicHolidays/action";
import styles from "./styles";
import Content from "./components/content";

const PublicHolidays = () => {
    const { publicHolidays } = useSelector((state) => state.publicHolidaysApi);
    useEffect(() => {
        publicHolidaysAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={publicHolidays}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={({ item, index }) => <Content key={index} {...item} />}
            />
        </ScreenContainer>
    )
}
export default PublicHolidays