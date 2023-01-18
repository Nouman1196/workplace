import { get_request, put_request, post_request, delete_request } from "../requests";
import { technologies, technologiesSlash } from "./targets";

export const getTechnologies = async () => {
    const data = await get_request({ target: technologies });
    return data;
}
export const editTechnologies = async ({ body, id }) => {
    const data = await put_request({ target: technologiesSlash + id, body });
    return data;
}
export const createTechnologies = async ({ body }) => {
    const data = await post_request({ target: technologies, body });
    return data;
}
export const deleteTechnologies = async ({ id }) => {
    const data = await delete_request({ target: technologiesSlash + id });
    return data;
}