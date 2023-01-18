import { put_request, get_request, delete_request, post_request } from "../requests";
import { projects, projectsSlash } from "./targets";

export const createProject = async ({ body }) => {
    const data = await post_request({ target: projects, body });
    return data;
}

export const getProjects = async () => {
    const data = await get_request({ target: projects });
    return data;
}

export const deleteProject = async ({ id }) => {
    const data = await delete_request({ target: projectsSlash + id });
    return data;
}

export const editProject = async ({ body, id }) => {
    const data = await put_request({ target: projectsSlash + id, body });
    return data;
}