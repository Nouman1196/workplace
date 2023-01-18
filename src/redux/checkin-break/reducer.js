import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const checkinBreakSlice = createSlice({
    name: "checkinBreak",
    initialState: {
        optionModal: false,
        lat: '',
        long: ''
    },
    reducers: {
        setOptionModal: ((state, action) => {
            state.optionModal = action.payload;
        }),
        setLat: ((state, action) => {
            state.lat = action.payload;
        }),
        setLong: ((state, action) => {
            state.long = action.payload;
        }),
    },
});
export const { setOptionModal, setLat, setLong } = checkinBreakSlice.actions;
export const checkinBreakReducer = checkinBreakSlice.reducer;