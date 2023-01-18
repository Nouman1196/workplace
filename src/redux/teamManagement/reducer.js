import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const teamManagementSlice = createSlice({
    name: "teamManagment",
    initialState: {
        teamManagementData: [],
        loading: false
    },
    reducers: {
        setTeamManagementData: ((state, action) => {
            state.teamManagementData = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
    },
});
export const { setTeamManagementData, setLoading } = teamManagementSlice.actions;
export const teamManagementReducer = teamManagementSlice.reducer;