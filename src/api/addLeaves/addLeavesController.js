import { get_request, post_request } from "../requests";
import { getLeaves, getRequest, postLeave } from "./targets";

export const getLeavesType = async () => {
    const data = await get_request({ target: getLeaves });
    return data;
}
export const getRequestType = async () => {
    const data = await get_request({ target: getRequest });
    return data;
}
export const submitLeave = async ({ body }) => {
    const data = await post_request({ target: postLeave, body });
    return data;
}