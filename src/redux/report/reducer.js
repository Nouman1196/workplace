import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name: "report",
    initialState: {
        reportsData: [],
        weeklyTime: [],
        currentPage: '',
        isShowWeeklyTime: false,
        lastPage: '',
        listLoader: false,
        refresh: false,
        loading: false,
        employeeData: { id: '', name: '' },
        start_date: '',
        end_date: '',
    },
    reducers: {
        setReportsData: ((state, action) => {
            state.reportsData = action.payload;
        }),
        setWeeklyTime: ((state, action) => {
            state.weeklyTime = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setIsShowWeeklyTime: ((state, action) => {
            state.isShowWeeklyTime = action.payload;
        }),
        setLastPage: ((state, action) => {
            state.lastPage = action.payload;
        }),
        setListLoader: ((state, action) => {
            state.listLoader = action.payload;
        }),
        setRefresh: ((state, action) => {
            state.refresh = action.payload;
        }),

        setStartDate: ((state, action) => {
            state.start_date = action.payload;
        }),
        setEndDate: ((state, action) => {
            state.end_date = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setEmployeeData: ((state, action) => {
            state.employeeData = action.payload;
        }),
    },
});
export const { setReportsData, setWeeklyTime, setIsShowWeeklyTime, setCurrentPage, setLastPage, setListLoader, setRefresh, setStartDate, setEndDate, setLoading, setEmployeeData } = reportSlice.actions;
export const reportReducer = reportSlice.reducer;