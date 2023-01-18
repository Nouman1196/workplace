import { get_request } from "../requests";
import { timer } from "./targets";

export const Timer = async () => {
    const data = await get_request({ target: timer });
    return data;
}
