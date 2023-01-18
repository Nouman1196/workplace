import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from 'moment';

const eventSlice = createSlice({
    name: "events",
    initialState: {
        eventsData: [],
        selectedDate: moment().format('YYYY-MM-DD'),
        event: '',
        showModal: false
    },
    reducers: {
        setEventsData: ((state, action) => {
            state.eventsData = action.payload;
        }),
        setSelectedDate: ((state, action) => {
            state.selectedDate = action.payload;
        }),
        setEvent: ((state, action) => {
            state.event = action.payload;
        }),
        setShowModal: ((state, action) => {
            state.showModal = action.payload;
        }),
    },
});
export const { setEventsData, setSelectedDate, setEvent, setShowModal } = eventSlice.actions;
export const eventReducer = eventSlice.reducer;