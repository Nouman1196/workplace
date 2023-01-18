import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employesData: [],
        currentPage: '',
        lastPage: '',
        flatListLoader: false,
        refresh: false,
        loading: false,
        searchKeywords: '',
        openSearch : false

    },
    reducers: {
        setEmployesData: ((state, action) => {
            state.employesData = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setLastPage: ((state, action) => {
            state.lastPage = action.payload;
        }),
        setFlatlistLoader: ((state, action) => {
            state.flatListLoader = action.payload;
        }),
        setRefresh: ((state, action) => {
            state.refresh = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setSearchKeywords: ((state, action) => {
            state.searchKeywords = action.payload;
        }),
        setSearchOpen: ((state, action) => {
            state.openSearch = action.payload;
        }),
    },
});
export const { setEmployesData, setCurrentPage, setLastPage, setFlatlistLoader, setRefresh, setLoading, setSearchKeywords, setSearchOpen } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;