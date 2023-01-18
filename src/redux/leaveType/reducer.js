import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const leaveTypeSlice = createSlice({
    name: "leaveType",
    initialState: {
        leaveType: [],
        loading: false,
        flatListLoader: false,
    },
    reducers: {
        setLeaveType: ((state, action) => {
            state.leaveType = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setFlatListLoader: ((state, action) => {
            state.flatListLoader = action.payload;
        }),
    },
});
export const { setLeaveType, setLoading, setFlatListLoader } = leaveTypeSlice.actions;
export const leaveTypeReducer = leaveTypeSlice.reducer;