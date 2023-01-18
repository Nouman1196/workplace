import { patch_request, get_request } from "../requests";
import { profile } from "./targets";

export const updateProfile = async ({ id, body }) => {
    const data = await patch_request({ target: profile + id, body });
    return data;
}
export const getProfile = async ({ id }) => {
    const data = await get_request({ target: profile + id });
    return data;
}