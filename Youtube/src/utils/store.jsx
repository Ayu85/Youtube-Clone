import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./slices/HamburgerSlice";
import CommentSlice from "./slices/CommentSlice";
import ThemeSlice from "./slices/ThemeSlice";
const store = configureStore({
    reducer: {
        slice: HamburgerSlice,
        comment: CommentSlice,
        theme: ThemeSlice
    }
})

export default store;