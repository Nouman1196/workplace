import Toast from 'react-native-simple-toast';
import { store } from "../../redux/store/store";
import { getDepartments, editDepartments, createDepartments, deleteDepartments } from '../../api/departments/departmentController';
import { setId, setDepartments, setDepartmentsDropDown, setTitle } from "./reducer";

export const departmentAction = async () => {
    let response = await getDepartments()
    if (response !== "Error") {
        store.dispatch(setDepartments(response.data))
    }
}
export const departmentDropDownAction = async () => {
    let response = await getDepartments()
    if (response !== "Error") {
        store.dispatch(setDepartmentsDropDown(response.data.map((item) => ({
            key: item?.id,
            value: item?.title
        }))))
    }
}

export const editAction = async ({ index }) => {
    const { departments, title, id } = store.getState().departmentApi
    let body = {
        name: title,
    }
    let response = await editDepartments({ body, id })
    if (response !== "Error") {
        let newDepartments = [...departments]
        newDepartments[index].title = title
        store.dispatch(setDepartments(newDepartments))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
    }
}

export const onCreateAction = async () => {
    const { departments, title } = store.getState().departmentApi
    let body = {
        name: title,
    }
    let response = await createDepartments({ body })
    if (response !== "Error") {
        let newDepartments = [...departments, response.data?.department]
        store.dispatch(setDepartments(newDepartments))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)

    }
}

export const onDeleteAction = async ({ index }) => {
    const { departments, id } = store.getState().departmentApi
    let response = await deleteDepartments({ id })
    if (response !== "Error") {
        let newDepartments = [...departments]
        newDepartments.splice(index, 1)
        store.dispatch(setDepartments(newDepartments))
        Toast.show(response.data.message, Toast.LONG);
    }
}

export const resetStates = () => {
    store.dispatch(setTitle(""))
    store.dispatch(setId(""))
}