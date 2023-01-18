import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const teamStatusSlice = createSlice({
    name: "teamStatus",
    initialState: {
        lates: [],
        breaks: [],
        lateCounts: '',
        breakCounts: '',
        loading: false
    },

    reducers: {
        setLate: ((state, action) => {
            state.lates = action.payload;
        }),
        setBreak: ((state, action) => {
            state.breaks = action.payload;
        }),
        setLateCounts: ((state, action) => {
            state.lateCounts = action.payload;
        }),
        setBreakCounts: ((state, action) => {
            state.breakCounts = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setLate, setBreak, setLateCounts, setBreakCounts, setLoading } = teamStatusSlice.actions;
export const teamStatusReducer = teamStatusSlice.reducer;