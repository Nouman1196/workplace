import Toast from 'react-native-simple-toast';
import { store } from "../../redux/store/store";
import { getDesignations, editDesignation, createDesignation, deleteDesignation } from '../../api/designations/designationControllers';
import { setId, setDesignation, setTitle } from "./reducer";

export const designationAction = async () => {
    let response = await getDesignations()
    if (response !== "Error") {
        store.dispatch(setDesignation(response.data))
    }
}

export const onEditAction = async ({ index }) => {
    const { designations, title, id, department } = store.getState().designationApi
    let body = {
        title,
        department_id: department?.key
    }
    let response = await editDesignation({ body, id })
    if (response !== "Error") {
        let newDesignations = [...designations]
        newDesignations[index].title = title
        newDesignations[index].department.name = department?.value
        store.dispatch(setDesignation(newDesignations))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
    }
}

export const onCreateAction = async () => {
    const { designations, title, department } = store.getState().designationApi
    let body = {
        title,
        department_id: department?.key
    }
    let response = await createDesignation({ body })
    if (response !== "Error") {
        let newDesignations = [...designations, response.data?.designation]
        store.dispatch(setDesignation(newDesignations))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)

    }
}

export const onDeleteAction = async ({ index }) => {
    const { designations, id } = store.getState().designationApi
    let response = await deleteDesignation({ id })
    if (response !== "Error") {
        let newDesignations = [...designations]
        newDesignations.splice(index, 1)
        store.dispatch(setDesignation(newDesignations))
        Toast.show(response.data.message, Toast.LONG);
    }
}

export const resetStates = () => {
    store.dispatch(setTitle(""))
    store.dispatch(setId(""))
}