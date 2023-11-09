import { configureStore } from "@reduxjs/toolkit"
import basketSlice from "./Slices/basketSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
    }
})

export default store;