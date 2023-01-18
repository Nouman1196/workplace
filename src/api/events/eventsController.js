import { get_request } from "../requests";
import { events } from "./targets";
export const getAllEvents = async () => {
    const data = await get_request({ target: events });
    return data;
}