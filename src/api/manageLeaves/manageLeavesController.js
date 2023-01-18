import { get_request, put_request } from "../requests";
import { leaveRequest, leaveRequestSlash } from "./targets";

export const manageLeaveRequests = async ({ params }) => {
    const data = await get_request({ target: leaveRequest, params });
    return data;
}

export const updateLeaveRequestApi = async ({ body, type }) => {
    const data = await put_request({ target: leaveRequestSlash + type, body });
    return data;
}