import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const missedRequestsSlice = createSlice({
    name: "missedRequests",
    initialState: {
        missedRequestData: [],
        history_ids: [], //selected punch request
        loading: false,
        currentPage: 1,
        lastPage: '',
        flatListLoader: false,
        refresh: false,
        status: '',
        index: 0,
        routes: [
            { key: 'Request', title: 'All', status: 'all', count: 0 },
            { key: 'Approved', title: 'Approved', status: 'approved', count: 0 },
            { key: 'Rejected', title: 'Rejected', status: 'rejected', count: 0 },
            { key: 'Pending', title: 'Pending', status: 'pending', count: 0 },
        ]
    },
    reducers: {
        setMissedRequestsData: ((state, action) => {
            state.missedRequestData = action.payload;
        }),
        setHistoryIds: ((state, action) => {
            state.history_ids = action.payload;
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
        setStatus: ((state, action) => {
            state.status = action.payload;
        }),
        setIndex: ((state, action) => {
            state.index = action.payload;
        }),
        setRoutes: ((state, action) => {
            state.routes = action.payload;
        }),
    },
});
export const { setMissedRequestsData, setCurrentPage, setFlatListLoader, setHistoryIds, setIndex, setLastPage, setLoading, setRefresh, setRoutes, setStatus } = missedRequestsSlice.actions;
export const missedRequestsReducer = missedRequestsSlice.reducer;