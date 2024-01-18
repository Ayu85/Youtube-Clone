import { createSlice } from "@reduxjs/toolkit";

const comment = createSlice({
    name: "comments",
    initialState: {
        data: []
    },
    reducers: {
        addComment: (state, action) => {
            state.data.push(action.payload)
        },
        removeComment: (state) => {
            state.data.shift(state)
        }
    }
})
export const { addComment ,removeComment} = comment.actions;
export default comment.reducer;