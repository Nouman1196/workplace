import { store } from "../store/store";
import { setRoleList, setSkillList, setDepartmentList, setProjectList, setWorkShiftList } from "./reducer";
import { getEmployesRoles, getCompanyDetail } from "../../api/addEmployes/addEmployesController";

export const addEmployeeAction = () => {
    getEmpRoles()
    getCompDetails()
}

export const getEmpRoles = async () => {
    let response = await getEmployesRoles()
    if (response !== "Error") {

        store.dispatch(setRoleList(
            response.data?.map((item) => ({
                key: item.value.toString(),
                value: item.title
            }))
        ))
    }
}

export const getCompDetails = async () => {
    let response = await getCompanyDetail()
    if (response !== "Error") {

        store.dispatch(setSkillList(
            response.data.skills?.map((item) => ({
                key: item.id,
                value: item.title
            }))
        ))

        store.dispatch(setDepartmentList(
            response.data.departments?.map((item) => ({
                key: item.id,
                value: item.name
            }))
        ))

        store.dispatch(setProjectList(
            response.data.projects?.map((item) => ({
                key: item.id,
                value: item.title
            }))
        ))

        store.dispatch(setProjectList(
            response.data.projects?.map((item) => ({
                key: item.id,
                value: item.title
            }))
        ))

        store.dispatch(setWorkShiftList(
            response.data.projects?.map((item) => ({
                key: item.id,
                value: item.title
            }))
        ))
    }
}