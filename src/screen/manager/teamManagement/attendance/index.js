import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector } from "react-redux";
import ScreenContainer from "../../../../components/screenContainer";
import TabViewHeader from "../components/tabViewHeader";
import { attendanceAction } from "../../../../redux/attendance/action";
import Absent from "./absent";
import Present from "./present";


const renderScene = SceneMap({
    Present,
    Absent,
});

const Attendance = ({ navigation }) => {
    const { presentsCounts, absentCounts } = useSelector((state) => state.attendanceApi)
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'Present', title: 'Present (' + presentsCounts + ')', navigation },
        { key: 'Absent', title: 'Absent (' + absentCounts + ')', navigation },
    ]);

    useEffect(() => {
        attendanceAction()
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

export default Attendance