import { get_request } from "../requests";
import { teamStats } from "./targets";

export const getTeamStatus = async () => {
    const data = await get_request({ target: teamStats });
    return data;
}