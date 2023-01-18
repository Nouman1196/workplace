import { get_request, post_request } from "../requests";
import { breakEnd, breakStart, checkIn, checkOut } from "./targets";

export const checkdIn = async ({ body }) => {
    const data = await post_request({ target: checkIn, body });
    return data;
}
export const checkedOut = async ({ body }) => {
    const data = await post_request({ target: checkOut, body });
    return data;
}
export const breakStarted = async () => {
    const data = await get_request({ target: breakStart });
    return data;
}
export const breakEnded = async () => {
    const data = await get_request({ target: breakEnd });
    return data;
}