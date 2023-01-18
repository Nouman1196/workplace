import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: "status",
    initialState: {
        checkedIn: false,
        startBreak: false,
        loading: false
    },
    reducers: {
        setCheckedIn: ((state, action) => {
            state.checkedIn = action.payload;
        }),
        setStartBreak: ((state, action) => {
            state.startBreak = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setCheckedIn, setStartBreak, setLoading } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;