import Toast from 'react-native-simple-toast';
import { store } from "../../redux/store/store";
import { getTechnologies, editTechnologies, createTechnologies, deleteTechnologies } from '../../api/technologies/technologyController';
import { setId, setTechnologies, setTitle } from "./reducer";

export const technolgiesAction = async () => {
    let response = await getTechnologies()
    if (response !== "Error") {
        store.dispatch(setTechnologies(response.data))
    }
}

export const editAction = async ({ index }) => {
    const { technologies, title, id } = store.getState().technologyApi
    let body = {
        title,
    }
    let response = await editTechnologies({ body, id })
    if (response !== "Error") {
        let newTechnologies = [...technologies]
        newTechnologies[index].title = title
        store.dispatch(setTechnologies(newTechnologies))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
    }
}

export const onCreateAction = async () => {
    const { technologies, title } = store.getState().technologyApi
    let body = {
        title,
    }
    let response = await createTechnologies({ body })
    if (response !== "Error") {
        let newTechnologies = [...technologies, response.data?.technology]
        store.dispatch(setTechnologies(newTechnologies))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
        
    }
}

export const onDeleteAction = async ({ index }) => {
    const { technologies, id } = store.getState().technologyApi
    let response = await deleteTechnologies({ id })
    if (response !== "Error") {
        let newTechnologies = [...technologies]
        newTechnologies.splice(index, 1)
        store.dispatch(setTechnologies(newTechnologies))
        Toast.show(response.data.message, Toast.LONG);
    }
}
export const resetStates = () => {
    store.dispatch(setTitle(""))
    store.dispatch(setId(""))
}