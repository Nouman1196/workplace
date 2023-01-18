import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from "react-redux";
import styles from './styles';
import Content from './components/content';
import { teamManagementAction } from '../../../redux/teamManagement/action';
import ScreenContainer from '../../../components/screenContainer';
const TeamManagement = ({ navigation }) => {
    const { teamManagementData } = useSelector((state) => state.teamManagementApi);

    useEffect(() => {
        teamManagementAction()
    }, [])

    return (
        <ScreenContainer>
            <FlatList
                data={teamManagementData}
                contentContainerStyle={styles.contentContainer}
                renderItem={(e) => <Content navigation={navigation} {...e} />}
            />
        </ScreenContainer>
    )
}

export default TeamManagement