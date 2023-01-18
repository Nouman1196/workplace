import { get_request } from "../requests";
import { report } from "./targets";

export const getWeaklyReport = async ({ params }) => {
    const data = await get_request({ target: report, params });
    return data;
}
