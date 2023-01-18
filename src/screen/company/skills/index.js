import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import { styles } from "./styles";
import ListHeader from "./listHeader";
import { skillAction } from "../../../redux/skills/action";
import ContentView from "./contentView";

const Skills = () => {
    const { skills, loading } = useSelector((state) => state.skillsApi);

    useEffect(() => {
        skillAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={skills}
                ListHeaderComponent={<ListHeader btnTitle={'Add Skill'} />}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item, index }) => <ContentView index={index} {...item} key={index} />}
            />
        </ScreenContainer>
    )
}

export default Skills