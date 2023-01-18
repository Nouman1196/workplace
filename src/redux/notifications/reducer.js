import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        flatListLoader: false,
        currentPage: '',
        lastPage: '',
        loading: false,
        refresh: false,
        remainingNotifications: false
    },

    reducers: {
        setNotifications: ((state, action) => {
            state.notifications = action.payload;
        }),
        setFlatlistLoaderNotification: ((state, action) => {
            state.flatListLoader = action.payload;
        }),
        setCurrentPageNotification: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setLastPageNotification: ((state, action) => {
            state.lastPage = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setRefresh: ((state, action) => {
            state.refresh = action.payload;
        }),
        setRemainingNotifications: ((state, action) => {
            state.remainingNotifications = action.payload;
        })
    },
});
export const { setNotifications, setFlatlistLoaderNotification, setCurrentPageNotification, setLastPageNotification, setLoading, setRefresh, setRemainingNotifications } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;