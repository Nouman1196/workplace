import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        messageData: '',
        showMessage: false
    },
    reducers: {
        setMessageData: ((state, action) => {
            state.messageData = action.payload;
        }),
        setShowMessage: ((state, action) => {
            state.showMessage = action.payload;
        }),
    },
});
export const { setMessageData, setShowMessage } = messagesSlice.actions;
export const messageReducer = messagesSlice.reducer;