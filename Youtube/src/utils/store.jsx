import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./slices/HamburgerSlice";
import CommentSlice from "./slices/CommentSlice";
const store = configureStore({
    reducer: {
        slice: HamburgerSlice,
        comment: CommentSlice
    }
})

export default store;