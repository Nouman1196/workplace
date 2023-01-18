
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const URLValidator = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

export const loginValidation = ({ email, password }) => {
    if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }
    else if (password === '') {
        return {
            valid: false,
            errors: password === '' ? "Please Enter Your Password" : null
        }
    }
    else {
        return { valid: true, errors: '' }
    }
}

export const PasswordRecoveryValidation = ({ email }) => {
    if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}
export const OTPValidation = ({ otp }) => {
    if (otp === '') {
        return {
            valid: false,
            errors: otp === '' ? "Please Enter Your OTP" : null
        }
    }
    else if (otp?.length < 4) {
        return {
            valid: false,
            errors: otp?.length < 4 ? "OTP must should contain 4 digits" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}

export const Signup_validation = ({ name, email, password, cPassword }) => {

    if (name === "") {
        return {
            valid: false,
            errors: name === "" ? "Please enter your name" : null
        }
    }
    else if (name?.length < 3) {
        return {
            valid: false,
            errors: name?.length < 3 ? "Name must should contain 3 letters" : null
        }
    }

    else if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }
    else if (password === '') {
        return {
            valid: false,
            errors: password === '' ? "Please Enter Your Password" : null
        }
    }
    else if (password?.length < 8) {
        return {
            valid: false,
            errors: password?.length < 8 ? "Password must should contain 8 digits" : null
        }
    }
    else if (cPassword === "") {
        return {
            valid: false,
            errors: cPassword === "" ? "Please enter your confirm password" : null
        }
    }
    else if (password !== cPassword) {
        return {
            valid: false,
            errors: password !== cPassword ? "Password doesn't match" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}


export const Password_Matching = ({ password, confirmPassword }) => {
    if (password === '') {
        return {
            valid: false,
            errors: password === '' ? "Please Enter Your Password" : null
        }
    }
    else if (password?.length < 8) {
        return {
            valid: false,
            errors: password?.length < 8 ? "Password must should contain 8 digits" : null
        }
    }
    else if (confirmPassword === "") {
        return {
            valid: false,
            errors: confirmPassword === "" ? "Please enter your confirm password" : null
        }
    }
    else if (password !== confirmPassword) {
        return {
            valid: false,
            errors: password !== confirmPassword ? "Password doesn't match" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}

export const SignUpScreen1Validation = ({ name, email, password, cPassword }) => {
    if (name === "") {
        return {
            valid: false,
            errors: name === "" ? "Please enter your name" : null
        }
    }
    else if (name?.length < 3) {
        return {
            valid: false,
            errors: name?.length < 3 ? "Name must should contain 3 letters" : null
        }
    }

    else if (email === '') {
        return {
            valid: false,
            errors: email === '' ? "Please Enter Your Email" : null
        }
    }
    else if (reg.test(email) === false) {
        return {
            valid: false,
            errors: reg.test(email) === false ? "Email format is invalid" : null
        }
    }
    else if (password === '') {
        return {
            valid: false,
            errors: password === '' ? "Please Enter Your Password" : null
        }
    }
    else if (password?.length < 8) {
        return {
            valid: false,
            errors: password?.length < 8 ? "Password must should contain 8 digits" : null
        }
    }
    else if (cPassword === "") {
        return {
            valid: false,
            errors: cPassword === "" ? "Please enter your confirm password" : null
        }
    }
    else if (password !== cPassword) {
        return {
            valid: false,
            errors: password !== cPassword ? "Password doesn't match" : null
        }
    }

    else {
        return { valid: true, errors: '' }
    }
}

export const SignUpScreen2Validation = ({ designation, time_zone, companyName, address, website_url }) => {
    if (designation === "") {
        return {
            valid: false,
            errors: designation === "" ? "Please enter your designation" : null
        }
    }

    else if (time_zone === '') {
        return {
            valid: false,
            errors: time_zone === '' ? "Please Select time zone" : null
        }
    }

    else if (companyName === '') {
        return {
            valid: false,
            errors: companyName === '' ? "Please Enter Company Name" : null
        }
    }
    else if (companyName?.length < 6) {
        return {
            valid: false,
            errors: companyName?.length < 6 ? "Company name should be greater than 5 alphabets" : null
        }
    }
    else if (address === "") {
        return {
            valid: false,
            errors: address === "" ? "Please enter Company Address" : null
        }
    }
    else if (website_url === "") {
        return {
            valid: false,
            errors: website_url == "" ? "Please enter Company URL" : null
        }
    }
    else if (URLValidator.test(website_url) === false) {
        return {
            valid: false,
            errors: URLValidator.test(website_url) === false ? "Website URL format is invalid" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}

export const ChangePassword = ({ cPassword, nPassword, rPassword, }) => {
    if (cPassword === "") {
        return {
            valid: false,
            errors: cPassword === "" ? "1" : null
        }
    }
    else if (nPassword === '') {
        return {
            valid: false,
            errors: nPassword === '' ? "2" : null
        }
    }
    else if (reg.test(rPassword) === false) {
        return {
            valid: false,
            errors: reg.test(rPassword) === false ? "3" : null
        }
    }

    else {
        return { valid: true, errors: null }
    }
}