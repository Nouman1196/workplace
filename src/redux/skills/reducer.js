import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        skills: [],
        title: '',
        id: '',
        loading: false
    },
    reducers: {
        setSkills: ((state, action) => {
            state.skills = action.payload;
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
export const { setSkills, setTitle, setId, setLoading } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;