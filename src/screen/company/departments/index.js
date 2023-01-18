import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import { styles } from "./styles";
import ListHeader from "./listHeader";
import { departmentAction } from "../../../redux/department/action";
import ContentView from "./contentView";

const Departments = () => {
    const { departments, loading } = useSelector((state) => state.departmentApi);

    useEffect(() => {
        departmentAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={departments}
                ListHeaderComponent={<ListHeader btnTitle={'Add Departments'} />}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item, index }) => <ContentView index={index} {...item} key={index} />}
            />
        </ScreenContainer>
    )
}

export default Departments