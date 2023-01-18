import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import { styles } from "./styles";
import ListHeader from "./listHeader";
import { projectAction } from "../../../redux/project/action";
import ContentView from "./contentView";
import { onCreateAction } from "../../../redux/project/action";

const Projects = () => {
    const { projects } = useSelector((state) => state.projectApi);

    useEffect(() => {
        projectAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={projects}
                ListHeaderComponent={<ListHeader onSave={onCreateAction} btnTitle={'Add Projects'} />}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item, index }) => <ContentView index={index} {...item} key={index} />}
            />
        </ScreenContainer>
    )
}

export default Projects