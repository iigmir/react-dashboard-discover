import { createSlice } from "@reduxjs/toolkit";

export const ReduxStoreApp = createSlice({
    name: "app_store",
    initialState: {
        list: [],
    },
    reducers: {
        SET_list: (state, action = { payload: [] }) => {
            state.list = action.payload;
        },
    },
});

// Redux state and action APIs
export const { SET_list } = ReduxStoreApp.actions;
export const ReduxList = (state) => state.app_store.list;
// Reducers
export default ReduxStoreApp.reducer;
