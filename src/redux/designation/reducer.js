import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const designationSlice = createSlice({
    name: "designation",
    initialState: {
        designations: [],
        title: '',
        department: '',
        id: '',
        loading: false,

    },
    reducers: {
        setDesignation: ((state, action) => {
            state.designations = action.payload;
        }),
        setId: ((state, action) => {
            state.id = action.payload;
        }),
        setTitle: ((state, action) => {
            state.title = action.payload;
        }),
        setDepartment: ((state, action) => {
            state.department = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),

    }
});
export const { setDesignation, setTitle, setId, setDepartment, setLoading } = designationSlice.actions;
export const designationReducer = designationSlice.reducer;