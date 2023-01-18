import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const punchHistoriesSlice = createSlice({
    name: "punchHistories",
    initialState: {
        punchHistories: [],
        loading: false,
        currentPage: '',
        lastPage: '',
        flatListLoader: false,
        refresh: false,
        isUser: false,
        index: 0,
        routes: [
            { key: 'Total', title: 'All', status: 'all', count: 0 },
            { key: 'Active', title: 'Active', status: 'active', count: 0 },
            { key: 'Rejected', title: 'Rejected', status: 'rejected', count: 0 },
            { key: 'Pending', title: 'Pending', status: 'pending', count: 0 },
        ]
    },
    reducers: {
        setPunchHistories: ((state, action) => {
            state.punchHistories = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setLastPage: ((state, action) => {
            state.lastPage = action.payload;
        }),
        setFlatListLoader: ((state, action) => {
            state.flatListLoader = action.payload;
        }),
        setRefresh: ((state, action) => {
            state.refresh = action.payload;
        }),
        setIsUser: ((state, action) => {
            state.isUser = action.payload;
        }),
        setIndex: ((state, action) => {
            state.index = action.payload;
        }),
        setRoutes: ((state, action) => {
            state.routes = action.payload;
        }),
    },
});
export const { setPunchHistories, setIsUser, setCurrentPage, setFlatListLoader, setIndex, setLastPage, setLoading, setRefresh, setRoutes } = punchHistoriesSlice.actions;
export const punchHistoriesReducer = punchHistoriesSlice.reducer;