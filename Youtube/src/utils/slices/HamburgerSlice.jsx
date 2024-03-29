import { createSlice } from "@reduxjs/toolkit";

const HamburgerSlice = createSlice({
    name: "hamburger",
    initialState: {
        value: true
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})
export default HamburgerSlice.reducer;
export const { setValue } = HamburgerSlice.actions