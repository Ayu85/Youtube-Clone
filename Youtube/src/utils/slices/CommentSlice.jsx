import { createSlice } from "@reduxjs/toolkit";

const comment = createSlice({
    name: "comments",
    initialState: {
        data: []
    },
    reducers: {
        addComment: (state, action) => {
            state.data.push(action.payload)
        }
    }
})