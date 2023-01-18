import React from "react";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useDispatch } from "react-redux";
import { setIndex } from "../../../../redux/missedRequests/reducer";
import ScreenContainer from "../../../../components/screenContainer";
import TabViewHeader from "../components/tabViewHeader";
import Rejected from "./rejected";
import Approved from "./approved";
import Pending from "./pending";
import Request from "./requests";
import styles from "./styles";

const renderScene = SceneMap({
    Request,
    Approved,
    Rejected,
    Pending,
});


const MissedPunchRequest = ({ routes, index }) => {
    const dispatch = useDispatch()
    return (
        <ScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={(e) => dispatch(setIndex(e))}
                style={styles.tabViewContainer}
                renderTabBar={e => <TabViewHeader setIndex={(e) => dispatch(setIndex(e))} {...e} index={index} />}
                initialLayout={styles.initialLayout}
            />
        </ScreenContainer>
    )
}
export default MissedPunchRequest