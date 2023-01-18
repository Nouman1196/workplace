import { get_request, put_request, post_request, delete_request } from "../requests";
import { skills, skillsSlash } from "./targets";

export const getSkills = async () => {
    const data = await get_request({ target: skills });
    return data;
}
export const editSkill = async ({ body, id }) => {
    const data = await put_request({ target: skillsSlash + id, body });
    return data;
}
export const createSkill = async ({ body }) => {
    const data = await post_request({ target: skills, body });
    return data;
}
export const deleteSkill = async ({ id }) => {
    const data = await delete_request({ target: skillsSlash + id });
    return data;
}