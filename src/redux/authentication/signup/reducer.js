import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { timeZonesData } from "../../../screen/authentication/signup/components/timeZones";
const signUpslice = createSlice({
    name: "signUp",
    initialState: {
        name: '',
        email: '',
        website_url: '',
        time_zone: '',
        errortext: '',
        address: '',
        status: 'ACTIVE',
        designation: '',
        password: '',
        cPassword: '',
        companyName: '',
        role: 'company_admin',
        timeZonesList: timeZonesData,
        joining_date: new Date(),
        loading: false
    },
    reducers: {
        setName: ((state, action) => {
            state.name = action.payload;
        }),
        setEmail: ((state, action) => {
            state.email = action.payload;
        }),
        setWebsiteURL: ((state, action) => {
            state.website_url = action.payload;
        }),
        setTimeZone: ((state, action) => {
            state.time_zone = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.errortext = action.payload;
        }),
        setAddress: ((state, action) => {
            state.address = action.payload;
        }),
        setStatus: ((state, action) => {
            state.status = action.payload;
        }),
        setDesignation: ((state, action) => {
            state.designation = action.payload;
        }),
        setPassword: ((state, action) => {
            state.password = action.payload;
        }),
        setCPassword: ((state, action) => {
            state.cPassword = action.payload;
        }),
        setCompanyName: ((state, action) => {
            state.companyName = action.payload;
        }),
        setRole: ((state, action) => {
            state.role = action.payload;
        }),
        setJoiningDate: ((state, action) => {
            state.joining_date = action.payload;
        }),
        setTimeZonesList: ((state, action) => {
            state.timeZonesList = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setName, setEmail, setTimeZonesList, setCompanyName, setWebsiteURL, setErrorText, setTimeZone, setAddress, setStatus, setDesignation, setPassword, setCPassword, setRole, setJoiningDate, setLoading, } = signUpslice.actions;
export const signUpReducer = signUpslice.reducer;