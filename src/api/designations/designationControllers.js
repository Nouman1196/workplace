import { get_request, put_request, post_request, delete_request } from "../requests";
import { designations, designationsSlash } from "./targets";

export const getDesignations = async () => {
    const data = await get_request({ target: designations });
    return data;
}
export const editDesignation = async ({ body, id }) => {
    const data = await put_request({ target: designationsSlash + id, body });
    return data;
}
export const createDesignation = async ({ body }) => {
    const data = await post_request({ target: designations, body });
    return data;
}
export const deleteDesignation = async ({ id }) => {
    const data = await delete_request({ target: designationsSlash + id });
    return data;
}