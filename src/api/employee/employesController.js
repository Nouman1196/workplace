import { get_request, patch_request } from "../requests";
import { getEmploye, getEmployeSlash } from "./targets";

export const getEmployeesApi = async ({ params }) => {
    const data = await get_request({ target: getEmploye, params });
    return data;
}
export const getEmployeeApi = async ({ id }) => {
    const data = await get_request({ target: getEmployeSlash + id });
    return data;
}

export const updateEmployeeApi = async ({ id, body }) => {
    const data = await patch_request({ target: getEmployeSlash + id, body });
    return data;
}
export const searchEmployeeApi = async ({ params }) => {
    const data = await get_request({ target: getEmploye, params });
    return data;
}