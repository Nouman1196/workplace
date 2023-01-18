import { get_request, post_request, delete_request } from "../requests";
import { getNotifications, read, allRead } from "./targets";

export const getAllNotifications = async ({ params }) => {
    const data = await get_request({ target: getNotifications, params });
    return data;
}
export const deleteNotification = async ({ id }) => {
    const data = await delete_request({ target: getNotifications + id, });
    return data;
}
export const readNotification = async ({ id }) => {
    const data = await get_request({ target: getNotifications + id + read });
    return data;
}
export const readAllNotifications = async () => {
    const data = await post_request({ target: allRead });
    return data;
}