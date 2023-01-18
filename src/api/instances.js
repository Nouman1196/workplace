import axios from "axios";
import { store } from "../redux/store/store";
import { baseURL } from "./baseURL"

export const instance = () => {
    const userData = store.getState().userApi.userData
    return axios.create({
        baseURL,
        headers: {
            Authorization: "Bearer " + userData?.meta?.token,
        },
    });
}
export const instanceWithoutHeader = () => axios.create({
    baseURL,
});
export const instanceFormData = () => {
    const userData = store.getState().userApi.userData
    return axios.create({
        baseURL,
        headers: {
            Authorization: "Bearer " + userData?.meta?.token,
            "Content-type": 'multipart/form-data'
        },
        transformRequest: (data) => { return data }
    });
}