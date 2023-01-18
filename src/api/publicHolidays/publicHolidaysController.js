import { get_request } from "../requests";
import { holidays } from "./targets";

export const getHolidays = async () => {
    const data = await get_request({ target: holidays });
    return data;
}