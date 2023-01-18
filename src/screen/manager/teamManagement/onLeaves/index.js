import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import TabViewHeader from "../components/tabViewHeader";
import { onLeavesActions } from "../../../../redux/onLeaves/action";
import FullLeaves from "./full";
import HalfLeaves from "./half";

const renderScene = SceneMap({
    FullLeaves,
    HalfLeaves,
});

const TeamLeaves = ({ navigation }) => {
    const { fullCounts, halfCounts } = useSelector((state) => state.onLeaveApi)
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'FullLeaves', title: 'Full (' + fullCounts + ')', navigation },
        { key: 'HalfLeaves', title: 'Half (' + halfCounts + ')', navigation },
    ]);

    useEffect(() => {
        onLeavesActions()
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

export default TeamLeaves