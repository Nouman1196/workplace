import { get_request } from "../requests";
import { leaveType } from "./targets";

export const getLeavesType = async () => {
    const data = await get_request({ target: leaveType });
    return data;
}