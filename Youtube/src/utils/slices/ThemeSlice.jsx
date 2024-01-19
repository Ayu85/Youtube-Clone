import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        isDark: false
    },
    reducers: {
        toogleTheme: (state, action) => {
            state.isDark = !(state.isDark)
        }
    }
})
export const { toogleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;