import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const addLeavesSlice = createSlice({
    name: "addLeaves",
    initialState: {
        leavesTypes: [],
        leaveTypeValue: '',
        requestsTypes: [],
        requestTypeValue: '',
        daysParts: [],
        dayPartValue: "",
        leaveFrom: "",
        leaveTo: "",
        loading: false,
        message: "",
        showMessage: false,
        daysCheck: false
    },

    reducers: {
        setLeavesTypes: ((state, action) => {
            state.leavesTypes = action.payload;
        }),
        setLeaveTypeValue: ((state, action) => {
            state.leaveTypeValue = action.payload;
        }),
        setRequestTypes: ((state, action) => {
            state.requestsTypes = action.payload;
        }),
        setRequestTypeValue: ((state, action) => {
            state.requestTypeValue = action.payload;
        }),
        setDaysParts: ((state, action) => {
            state.daysParts = action.payload;
        }),
        setDayPartValue: ((state, action) => {
            state.dayPartValue = action.payload;
        }),
        setLeaveFrom: ((state, action) => {
            state.leaveFrom = action.payload;
        }),
        setLeaveTo: ((state, action) => {
            state.leaveTo = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setMessage: ((state, action) => {
            state.message = action.payload;
        }),
        setShowMessage: ((state, action) => {
            state.showMessage = action.payload;
        }),
        setDaysCheck: ((state, action) => {
            state.showMessage = action.payload;
        }),
    },
});
export const { setLeavesTypes, setLeaveTypeValue, setRequestTypes, setRequestTypeValue, setDaysParts, setDayPartValue, setLeaveFrom, setLeaveTo, setLoading, setMessage, setShowMessage, setDaysCheck } = addLeavesSlice.actions;
export const addLeavesReducer = addLeavesSlice.reducer;