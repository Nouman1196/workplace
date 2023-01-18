import React from "react";
import { View, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ScreenContainer from "../../../../../components/screenContainer";
import Content from "./content";
import styles from "./styles";
import { historyType } from "../../../../../redux/missedRequests/action";

const PunchDetails = ({ route }) => {
    const { user_name, punched_status, punched_at, long, lat, history_type } = route.params
    const pakistanLocation = {
        longitude: 34.0479,
        latitude: 100.6197,
    }
    const data = [
        {
            title: "User Name",
            description: user_name
        },
        {
            title: "Time Request at",
            description: punched_at
        },
        {
            title: "Time Request for",
            description: punched_at
        },
        {
            title: "Type",
            description: historyType(history_type).title
        },
        {
            title: "Latitude",
            description: lat
        },
        {
            title: "Longitude",
            description: long
        },
        {
            title: "Status",
            description: punched_status
        },
    ]
    return (
        <ScreenContainer>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.maps}
                    initialRegion={{
                        latitude: lat ? lat : pakistanLocation.latitude,
                        longitude: long ? long : pakistanLocation.longitude,
                        longitude: 34.0479,
                        latitude: 100.6197,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {lat && long &&
                        <Marker coordinate={{ latitude: lat, longitude: long }} />
                    }

                </MapView>
            </View>
            <View style={styles.viewContainer}>
                <FlatList
                    data={data}
                    contentContainerStyle={styles.contentContainerStyle}
                    renderItem={(e) => <Content {...e} />}
                />
            </View>
        </ScreenContainer>
    )
}
export default PunchDetails