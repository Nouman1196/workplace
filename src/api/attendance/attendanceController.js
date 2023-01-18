import { get_request } from "../requests";
import { attendence } from "./targets";

export const getTeamAttendance = async () => {
    const data = await get_request({ target: attendence });
    return data;
}
