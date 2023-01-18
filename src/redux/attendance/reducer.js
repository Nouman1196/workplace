import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const attendanceSlice = createSlice({
    name: "attendance",
    initialState: {
        presents: [],
        absents: [],
        presentsCounts: '',
        absentCounts: '',
        loading: false
    },

    reducers: {
        setPresents: ((state, action) => {
            state.presents = action.payload;
        }),
        setAbsents: ((state, action) => {
            state.absents = action.payload;
        }),
        setPresentsCounts: ((state, action) => {
            state.presentsCounts = action.payload;
        }),
        setAbsentsCounts: ((state, action) => {
            state.absentCounts = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setPresents, setAbsents, setPresentsCounts, setAbsentsCounts, setLoading } = attendanceSlice.actions;
export const attendanceReducer = attendanceSlice.reducer;