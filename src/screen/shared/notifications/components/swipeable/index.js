import React from "react";
import { View, Text, Image } from "react-native";
import Swipeout from "react-native-swipeout";
import Color from "../../../../../theme/colors/colors";
import NothingToShow from "../../../../../components/emptyPage";
import SwipeableComponent from "./components/swipeableComponent";
import styles from "../../styles";
import { readNotificationAction, deleteNotificationAction } from "../../../../../redux/notifications/action";
const SwipeOut = ({ notificationLength, item, index }) => {
    let swipeBtns = [
        {
            component: <SwipeableComponent title="Read" />,
            backgroundColor: '#5cdb91',
            onPress: () => {
                readNotificationAction({ id: item?.id, index });
            },
        },
        {
            component: <SwipeableComponent title="Delete" />,
            backgroundColor: Color.red,
            onPress: () => { deleteNotificationAction({ id: item?.id, index }) }
        },
    ];
    return (
        <>
            {notificationLength > 0 ?
                <Swipeout key={index} right={swipeBtns}
                    autoClose='true'
                    backgroundColor={item?.is_read ? Color.white : Color.lightGray}
                    style={styles.swipeOutContainer}
                >
                    <View style={styles.swipeOutInternalContainer}>
                        <Image style={{ borderRadius: 100, height: 50, width: 50 }} source={require('../../../../../assets/images/ic_launcher.png')} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.notificationTitle}>{item?.title}</Text>
                            <Text style={styles.notificationDescription}>{item?.message}</Text>
                        </View>
                    </View>
                </Swipeout>
                :
                <NothingToShow />
            }
        </>
    )
}

export default SwipeOut