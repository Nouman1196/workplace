import Toast from 'react-native-simple-toast';
import { store } from "../../redux/store/store";
import { getProjects, createProject, deleteProject, editProject } from '../../api/projects/projectsController';
import { setProjects, setId, setDescription, setTitle, setLoading, setStatus } from './reducer';

export const projectAction = async () => {
    let response = await getProjects()
    if (response !== "Error") {
        store.dispatch(setProjects(response.data))
    }
}

export const onEditAction = async ({ index }) => {
    const { status, title, description, projects, id } = store.getState().projectApi
    let body = {
        title,
        status: status?.value,
        description
    }
    let response = await editProject({ body, id })
    if (response !== "Error") {
        let newProjects = [...projects]
        newProjects[index].title = title
        newProjects[index].status = status?.value
        newProjects[index].description = description
        store.dispatch(setProjects(newProjects))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)
    }
}

export const onCreateAction = async () => {
    const { status, title, description, projects } = store.getState().projectApi
    let body = {
        title,
        status: status?.value,
        description
    }
    let response = await createProject({ body })
    if (response !== "Error") {
        let newProjects = [...projects, response.data?.project]
        store.dispatch(setProjects(newProjects))
        resetStates()
        Toast.show(response.data.meta.message, Toast.LONG)

    }
}

export const onDeleteAction = async ({ index }) => {
    const { projects, id } = store.getState().projectApi
    let response = await deleteProject({ id })
    if (response !== "Error") {
        let newProjects = [...projects]
        newProjects.splice(index, 1)
        store.dispatch(setProjects(newProjects))
        Toast.show(response.data.message, Toast.LONG);
    }
}

export const resetStates = () => {
    store.dispatch(setTitle(""))
    store.dispatch(setId(""))
    store.dispatch(setStatus(""))
    store.dispatch(setDescription(""))
}