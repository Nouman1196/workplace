import React, { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../../../redux/manageLeaves/reducer";
import ScreenContainer from "../../../components/screenContainer";
import TabViewHeader from "./components/tabViewHeader";
import Rejected from "./rejected";
import Approved from "./approved";
import Pending from "./pending";
import Request from "./requests";
import { onMount } from "../../../redux/manageLeaves/action";
import styles from "./styles";

const renderScene = SceneMap({
    Request,
    Approved,
    Rejected,
    Pending,
});

const Leaves = ({ navigation }) => {
    const dispatch = useDispatch()
    const { routes, index, loading } = useSelector((state) => state.manageLeaveApi);
    const layout = useWindowDimensions();

    useEffect(() => {
        onMount()
    }, [index])
    return (
        <ScreenContainer>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={(e) => dispatch(setIndex(e))}
                style={styles.tabViewContainer}
                renderTabBar={(e) => <TabViewHeader {...e} index={index} />}
                initialLayout={{ width: layout.width }}
            />
        </ScreenContainer>
    ) 
}

export default Leaves