import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        widgetsData: [],
        refresh: false,
        loading: false
    },

    reducers: {
        setWidgetsData: ((state, action) => {
            state.widgetsData = action.payload;
        }),
        setRefresh: ((state, action) => {
            state.refresh = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setWidgetsData, setRefresh, setLoading } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;