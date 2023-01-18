import { get_request } from "../requests";
import { status } from "./targets";

export const getStatus = async () => {
    const data = await get_request({ target: status });
    return data;
}