import { get_request } from "../requests";
import { employesRoles, companyDetails } from "./targets";

export const getEmployesRoles = async () => {
    const data = await get_request({ target: employesRoles });
    return data;
}

export const getCompanyDetail = async () => {
    const data = await get_request({ target: companyDetails });
    return data;
}