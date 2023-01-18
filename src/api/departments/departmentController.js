import { get_request, put_request, post_request, delete_request } from "../requests";
import { departments, departmentsSlash } from "./targets";

export const getDepartments = async () => {
    const data = await get_request({ target: departments });
    return data;
}
export const editDepartments = async ({ body, id }) => {
    const data = await put_request({ target: departmentsSlash + id, body });
    return data;
}
export const createDepartments = async ({ body }) => {
    const data = await post_request({ target: departments, body });
    return data;
}
export const deleteDepartments = async ({ id }) => {
    const data = await delete_request({ target: departmentsSlash + id });
    return data;
}