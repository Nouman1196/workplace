import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const manageLeaves = createSlice({
    name: "manageLeaves",
    initialState: {
        leavesData: [],
        leave_request_ids: [],
        loading: false,
        currentPage: '',
        lastPage: '',
        flatListLoader: false,
        refresh: false,
        status: '',
        index: 0,
        routes: [
            { key: 'Request', title: 'All Leaves', status: '' },
            { key: 'Approved', title: 'Approved', status: 'approved' },
            { key: 'Rejected', title: 'Rejected', status: 'rejected' },
            { key: 'Pending', title: 'Pending', status: 'pending' },
        ]
    },
    reducers: {
        setLeavesData: ((state, action) => {
            state.leavesData = action.payload;
        }),
        setLeavesIds: ((state, action) => {
            state.leave_request_ids = action.payload;
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
export const { setLeavesData, setLeavesIds, setLoading, setCurrentPage, setLastPage, setFlatListLoader, setRefresh, setStatus, setIndex, setRoutes } = manageLeaves.actions;
export const manageLeaveReducer = manageLeaves.reducer;