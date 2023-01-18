import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import TabViewHeader from "../components/tabViewHeader";
import { teamStatusAction } from "../../../../redux/teamStatus/action";
import Break from "./break";
import Late from "./late";

const renderScene = SceneMap({
    Break,
    Late,
});

const TeamStatus = ({ navigation }) => {
    const { lateCounts, breakCounts } = useSelector((state) => state.teamStatusApi)
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'Break', title: 'Break (' + breakCounts + ')', navigation },
        { key: 'Late', title: 'Late (' + lateCounts + ')', navigation },
    ]);

    useEffect(() => {
        teamStatusAction()
    }, [])

    return (
        <ScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                style={{ marginTop: 20 }}
                renderTabBar={(e) => <TabViewHeader {...e} index={index} setIndex={setIndex} />}
                initialLayout={{ width: layout.width }}
            />
        </ScreenContainer>
    )
}

export default TeamStatus