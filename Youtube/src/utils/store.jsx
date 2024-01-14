import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./slices/HamburgerSlice";
const store = configureStore({
    reducer: {
        slice: HamburgerSlice
    }
})

export default store;