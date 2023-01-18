import { get_request } from "../requests";
import { widgets } from "./targets";

export const teamManagementApi = async () => {
    const data = await get_request({ target: widgets });
    return data;
}