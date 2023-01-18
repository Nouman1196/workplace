import { put_request, get_request } from "../requests";
import { punchReq, updateReq, histories, historiesEmployes, historiesPersonal } from "./targets";

export const getPunchReq = async ({ params }) => {
    const data = await get_request({ target: punchReq, params });
    return data;
}

export const updatePunchReq = async ({ type, body }) => {
    const data = await put_request({ target: updateReq + type, body });
    return data;
}

export const getPunchHistoriesApi = async ({ params }) => {
    const data = await get_request({ target: histories, params });
    return data;
}

export const getUserPunchHistoriesApi = async ({ params }) => {
    const data = await get_request({ target: historiesPersonal, params });
    return data;
}

export const getEmployesPunchHistoriesApi = async ({ params }) => {
    const data = await get_request({ target: historiesEmployes, params });
    return data;
}