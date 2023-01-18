import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const publicHolidaysSlice = createSlice({
    name: "publicHolidays",
    initialState: {
        publicHolidays: [],
        loading: false,
        flatListLoader: false,
    },
    reducers: {
        setPublicHolidays: ((state, action) => {
            state.publicHolidays = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setFlatListLoader: ((state, action) => {
            state.flatListLoader = action.payload;
        }),
    },
});
export const { setPublicHolidays, setLoading, setFlatListLoader } = publicHolidaysSlice.actions;
export const publicHolidaysReducer = publicHolidaysSlice.reducer;