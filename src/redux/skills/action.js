import Toast from 'react-native-simple-toast';
import { store } from "../../redux/store/store";
import { getSkills, editSkill, createSkill, deleteSkill } from "../../api/skills/skillsController";
import { setId, setSkills, setTitle } from "./reducer";

export const skillAction = async () => {
    let response = await getSkills()
    if (response !== "Error") {
        store.dispatch(setSkills(response.data))
    }
}

export const editAction = async ({ index }) => {
    const { skills, title, id } = store.getState().skillsApi
    let body = {
        title,
    }
    let response = await editSkill({ body, id })
    if (response !== "Error") {
        let newSkills = [...skills]
        newSkills[index].title = title
        store.dispatch(setSkills(newSkills))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
    }
}

export const onCreateAction = async () => {
    const { skills, title } = store.getState().skillsApi
    let body = {
        title,
    }
    let response = await createSkill({ body })
    if (response !== "Error") {
        let newSkills = [...skills, response.data?.skill]
        store.dispatch(setSkills(newSkills))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)

    }
}

export const onDeleteAction = async ({ index }) => {
    const { skills, id } = store.getState().skillsApi
    let response = await deleteSkill({ id })
    if (response !== "Error") {
        let newSkills = [...skills]
        newSkills.splice(index, 1)
        store.dispatch(setSkills(newSkills))
        Toast.show(response.data.message, Toast.LONG);
    }
}

export const resetStates = () => {
    store.dispatch(setTitle(""))
    store.dispatch(setId(""))
}