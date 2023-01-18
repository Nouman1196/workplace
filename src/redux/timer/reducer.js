import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        timerData: '',
        clockRefresh: false,
        stopWatchTime: 0,
        date: ''
    },
    reducers: {
        setTimerData: ((state, action) => {
            state.timerData = action.payload;
        }),
        setClockRefresh: ((state, action) => {
            state.clockRefresh = action.payload;
        }),
        setStopWatchTime: ((state, action) => {
            state.stopWatchTime = action.payload;
        }),
        setDate: ((state, action) => {
            state.date = action.payload;
        }),
    },
});
export const { setTimerData, setClockRefresh, setStopWatchTime, setDate } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;