import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import { styles } from "./styles";
import ListHeader from "./listHeader";
import { designationAction } from "../../../redux/designation/action";
import ContentView from "./contentView";
import { departmentDropDownAction } from "../../../redux/department/action";
const Designations = () => {
    const { designations } = useSelector((state) => state.designationApi);

    useEffect(() => {
        designationAction()
        departmentDropDownAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={designations}
                ListHeaderComponent={<ListHeader btnTitle={'Add Designation'} />}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item, index }) => <ContentView index={index} {...item} key={index} />}
            />
        </ScreenContainer>
    )
}

export default Designations