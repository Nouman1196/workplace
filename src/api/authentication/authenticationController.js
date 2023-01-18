import { post_request, put_request, get_withoutHeader } from "../requests";
import { generateOtp, login, signUp, verifyOtp, updatePassword } from "./targets";

export const Login = async ({ body }) => {
    const data = await post_request({ target: login, body });
    return data;
}
export const GenerateOtp = async ({ body }) => {
    const data = await get_withoutHeader({ target: generateOtp, body });
    return data;
}

export const VerifyOtp = async ({ body }) => {
    const data = await get_withoutHeader({ target: verifyOtp, body });
    return data;
}
export const UpdatePassword = async ({ body }) => {
    const data = await put_request({ target: updatePassword, body });
    return data;
}
export const SignUp = async ({ body }) => {
    const data = await post_request({ target: signUp, body });
    return data;
}