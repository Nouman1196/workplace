import React from "react";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useDispatch } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import styles from "./styles";
import TabViewHeader from '../components/tabViewHeader'
import Active from "./active";
import Rejected from "./rejected";
import Total from "./total";
import Pending from "./pending";
import { setIndex } from "../../../../redux/punchHistories/reducer";

const renderScene = SceneMap({
    Total,
    Active,
    Rejected,
    Pending
});


const PunchHistory = ({ routes, index }) => {
    const dispatch = useDispatch()
    return (
        <ScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={(e) => dispatch(setIndex(e))}
                style={styles.tabViewContainer}
                renderTabBar={(e) => <TabViewHeader setIndex={(e) => dispatch(setIndex(e))} {...e} index={index} />}
                initialLayout={styles.initialLayout}
            />
        </ScreenContainer>
    )
}
export default PunchHistory