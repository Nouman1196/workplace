import { get_request } from "../requests";
import { teamLeaves } from "./targets";

export const getTeamLeaves = async () => {
    const data = await get_request({ target: teamLeaves });
    return data;
}