import Toast from 'react-native-simple-toast';
import { store } from "../store/store";
import { setNotifications, setCurrentPageNotification, setLastPageNotification, setLoading, setRemainingNotifications, setRefresh, setFlatlistLoaderNotification } from "./reducer";
import { getAllNotifications, readAllNotifications, readNotification, deleteNotification } from "../../api/notifications/notificationsController";

export const notificationAction = async () => {
    store.dispatch(setLoading(true))
    await getNotifications()
    store.dispatch(setLoading(false))
}

const getNotifications = async () => {
    let response = await getAllNotifications({})
    if (response !== "Error") {
        store.dispatch(setNotifications(response.data.notifications));
        store.dispatch(setLastPageNotification(response.data?.meta?.total_pages));
        store.dispatch(setCurrentPageNotification(response.data?.meta?.current_page));
        if (response.data?.meta?.unread_count > 0) {
            store.dispatch(setRemainingNotifications(true))
        } else {
            store.dispatch(setRemainingNotifications(false))
        }
    }
}
export const pullToRefresh = async () => {
    store.dispatch(setRefresh(true))
    await getNotifications()
    store.dispatch(setRefresh(false))
}

export const loadMore = async () => {
    const { notifications, currentPage, lastPage } = store.getState().notificationsApi
    if (notifications.length > 0) {
        if (currentPage !== lastPage) {
            let page = currentPage + 1
            store.dispatch(setFlatlistLoaderNotification(true))
            const params = {
                page
            }
            let response = await getAllNotifications({ params })
            if (response !== 'Error') {
                store.dispatch(setNotifications(notifications.concat(response.data?.notifications)));
                store.dispatch(setLastPageNotification(response.data?.meta?.total_pages));
                store.dispatch(setCurrentPageNotification(response.data?.meta?.current_page));
            }
            store.dispatch(setFlatlistLoaderNotification(false))
        }
    }
}

export const readNotificationAction = async ({ id, index }) => {
    let data = store.getState().notificationsApi.notifications
    let response = await readNotification({ id })
    if (response !== "Error") {
        data[index].is_read = true
        store.dispatch(setNotifications([...data]));
        Toast.show(response.data?.message, Toast.LONG);
    }
}
export const readAllNotificationAction = async () => {
    let response = await readAllNotifications()
    if (response !== "Error") {
        notificationAction()
        // true state of some notification side
    }
}
export const deleteNotificationAction = async ({ id, index }) => {
    let data = [...store.getState().notificationsApi.notifications]
    let response = await deleteNotification({ id })
    if (response !== "Error") {
        data.splice(index, 1);
        store.dispatch(setNotifications([...data]));
        Toast.show(response.data?.message, Toast.LONG);
    }
}