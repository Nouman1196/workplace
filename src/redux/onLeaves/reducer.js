import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const onLeaveSlice = createSlice({
    name: "onLeaves",
    initialState: {
        fulls: [],
        halfs: [],
        fullCounts: '',
        halfCounts: '',
        loading: false
    },

    reducers: {
        setFulls: ((state, action) => {
            state.fulls = action.payload;
        }),
        setHalfs: ((state, action) => {
            state.halfs = action.payload;
        }),
        setFullCounts: ((state, action) => {
            state.fullCounts = action.payload;
        }),
        setHalfCounts: ((state, action) => {
            state.halfCounts = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setFulls, setHalfs, setFullCounts, setHalfCounts, setLoading } = onLeaveSlice.actions;
export const onLeaveReducer = onLeaveSlice.reducer;