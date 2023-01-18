import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from "react-redux";
import { dashboardAction, refreshProfile } from "../../../redux/dashboard/action";
import Theme from '../../../theme/theme';
import DashboardListHeader from './components/dashboardListHeader';
import Boxes from './components/content';
import DashboardFooter from './components/dashboardFooter';
import SkeltonLoader from '../../../components/loader/skeltonLoader/dashboardSkelton';
import styles from './styles';
const DashBoard = ({ navigation }) => {
    const { widgetsData, refresh, loading } = useSelector((state) => state.dashboardApi);

    useEffect(() => {
        dashboardAction()
    }, [])


    return (
        <SafeAreaView style={Theme.mainContainer}>
            {loading ?
                <SkeltonLoader />
                :
                <FlatList
                    numColumns={2}
                    data={widgetsData}
                    refreshing={refresh}
                    contentContainerStyle={styles.contentContainer}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    onRefresh={refreshProfile}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({ id }, index) => id}
                    ListHeaderComponent={<DashboardListHeader />}
                    renderItem={(e) => <Boxes key={e.index} {...e} />}
                    ListFooterComponent={<DashboardFooter navigation={navigation} />}
                />
            }
        </SafeAreaView>
    );
};

export default DashBoard;