import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const addEmployesSlice = createSlice({
    name: "addEmployee",
    initialState: {
        name: '',
        email: '',
        mobile_number: '',
        address: '',
        gender: '',
        birthday: '',
        genderList: [{ key: 1, value: 'Male' }, { key: 2, value: 'Female' }],
        roleList: [],
        role: '',
        joining_date: '',
        skillsList: [],
        skill: [],
        projectList: [],
        departmentList: [],
        department: '',
        workShiftList: [],
        workshift: '',

        loading: false
    },

    reducers: {
        setName: ((state, action) => {
            state.name = action.payload;
        }),
        setEmail: ((state, action) => {
            state.email = action.payload;
        }),
        setMobileNumber: ((state, action) => {
            state.mobile_number = action.payload;
        }),
        setAddress: ((state, action) => {
            state.address = action.payload;
        }),
        setGender: ((state, action) => {
            state.gender = action.payload;
        }),
        setBirthday: ((state, action) => {
            state.birthday = action.payload;
        }),
        setGenderList: ((state, action) => {
            state.genderList = action.payload;
        }),
        setRoleList: ((state, action) => {
            state.roleList = action.payload;
        }),
        setRole: ((state, action) => {
            state.role = action.payload;
        }),
        setJoiningDate: ((state, action) => {
            state.joining_date = action.payload;
        }),
        setSkillList: ((state, action) => {
            state.skillsList = action.payload;
        }),
        setSkill: ((state, action) => {
            state.skill = action.payload;
        }),
        setProjectList: ((state, action) => {
            state.projectList = action.payload;
        }),
        setDepartmentList: ((state, action) => {
            state.departmentList = action.payload;
        }),
        setDeparment: ((state, action) => {
            state.department = action.payload;
        }),
        setWorkShiftList: ((state, action) => {
            state.workShiftList = action.payload;
        }),
        setWorkshift: ((state, action) => {
            state.workshift = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setName, setEmail, setMobileNumber, setAddress, setGender, setBirthday, setGenderList, setRoleList, setRole, setJoiningDate, setSkillList, setSkillIds, setProjectList, setDepartmentList, setDeparment, setWorkShiftList, setWorkshift, setLoading } = addEmployesSlice.actions;
export const addEmployesReducer = addEmployesSlice.reducer;