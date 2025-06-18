import { configureStore } from "@reduxjs/toolkit";
import ReadLatterSlice from "../slices/ReadLatterSlice";

export const store = configureStore({
    reducer:{
        ReadLatterSlice
    }
})