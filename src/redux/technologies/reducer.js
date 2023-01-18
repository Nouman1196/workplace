import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const technologySlice = createSlice({
    name: "technology",
    initialState: {
        technologies: [],
        title: '',
        id: '',
        loading: false
    },
    reducers: {
        setTechnologies: ((state, action) => {
            state.technologies = action.payload;
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
export const { setTechnologies, setTitle, setId, setLoading } = technologySlice.actions;
export const technologyReducer = technologySlice.reducer;