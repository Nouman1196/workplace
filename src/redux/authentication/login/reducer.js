import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: 'manager@workplacecheckin.com',
        password: 'Manager!234',
        secureText: true,
        animatedLogo: true,
        errortext: '',
        loginLoader: false
    },
    reducers: {
        setEmail: ((state, action) => {
            state.email = action.payload;
        }),
        setPassword: ((state, action) => {
            state.password = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.errortext = action.payload;
        }),
        setSecureText: ((state, action) => {
            state.secureText = action.payload;
        }),
        setAnimatedLogo: ((state, action) => {
            state.animatedLogo = action.payload;
        }),
        setLoginLoader: ((state, action) => {
            state.loginLoader = action.payload;
        }),
    },
});
export const { setEmail, setPassword, setErrorText, setSecureText, setAnimatedLogo, setLoginLoader } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;