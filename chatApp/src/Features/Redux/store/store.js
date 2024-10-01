import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../AllSlice/Counter/counterSlice";

const store = configureStore({
    reducer: {
        counters: counterSlice,
    }
})

export default store;