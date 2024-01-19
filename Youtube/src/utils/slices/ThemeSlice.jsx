import { createSlice } from "@reduxjs/toolkit";

const ThemeToggler = createSlice({
    name: "theme",
    initialState: {
        isDark: true
    },
    reducers: {
        toogleTheme: (state, action) => {
            state.isDark = !(state.isDark)
        }
    }
})
export const { toogleTheme } = ThemeToggler.actions;
export default ThemeToggler.reducer;