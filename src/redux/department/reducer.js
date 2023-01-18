import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
    name: "department",
    initialState: {
        departments: [],
        departmentsDropDown: [],
        title: '',
        id: '',
        loading: false
    },
    reducers: {
        setDepartments: ((state, action) => {
            state.departments = action.payload;
        }),
        setDepartmentsDropDown: ((state, action) => {
            state.departmentsDropDown = action.payload;
        }),
        setTitle: ((state, action) => {
            state.title = action.payload;
        }),
        setId: ((state, action) => {
            state.id = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setDepartments, setDepartmentsDropDown, setTitle, setId, setLoading } = departmentSlice.actions;
export const departmentReducer = departmentSlice.reducer;