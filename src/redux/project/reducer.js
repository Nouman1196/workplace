import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: [],
        title: '',
        status: '',
        id: '',
        description: '',
        loading: false,
        statusList: [{ key:1, value: 'pending' },{ key: 2, value: 'in_progress' }, { key: 3, value: 'completed' }]

    },
    reducers: {
        setProjects: ((state, action) => {
            state.projects = action.payload;
        }),
        setTitle: ((state, action) => {
            state.title = action.payload;
        }),
        setStatus: ((state, action) => {
            state.status = action.payload;
        }),
        setId: ((state, action) => {
            state.id = action.payload;
        }),
        setDescription: ((state, action) => {
            state.description = action.payload;
        }),
        setStatusList: ((state, action) => {
            state.statusList = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),

    }
});
export const { setProjects, setTitle, setStatus, setId, setDescription, setLoading, setStatusList } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;