import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../../components/screenContainer";
import { styles } from "./styles";
import ListHeader from "./listHeader";
import { technolgiesAction } from "../../../redux/technologies/action";
import ContentView from "./contentView";

const Technologies = () => {
    const { technologies, loading } = useSelector((state) => state.technologyApi);

    useEffect(() => {
        technolgiesAction()
    }, [])
    return (
        <ScreenContainer>
            <FlatList
                data={technologies}
                ListHeaderComponent={<ListHeader btnTitle={'Add Technology'} />}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item, index }) => <ContentView index={index} {...item} key={index} />}
            />
        </ScreenContainer>
    )
}

export default Technologies