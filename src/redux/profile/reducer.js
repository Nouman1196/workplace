import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        userProfile: '',
        profilePicture: '',
        otherProfileIndex: '',
        hasUnsavedChanges: false,
        isUpdating: false,
        loading: false
    },

    reducers: {
        setUserProfile: ((state, action) => {
            state.userProfile = action.payload;
        }),
        setLoading: ((state, action) => {
            state.loading = action.payload;
        }),
        setIsUpdating: ((state, action) => {
            state.isUpdating = action.payload;
        }),
        setProfilePicture: ((state, action) => {
            state.profilePicture = action.payload;
        }),
        setOtherProfileIndex: ((state, action) => {
            state.otherProfileIndex = action.payload;
        }),
        setHasUnsavedChanges: ((state, action) => {
            state.hasUnsavedChanges = action.payload;
        }),
    },
});
export const { setUserProfile, setHasUnsavedChanges, setOtherProfileIndex, setProfilePicture, setLoading, setIsUpdating } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;