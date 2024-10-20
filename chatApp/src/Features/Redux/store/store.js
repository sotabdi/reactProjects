import { configureStore } from "@reduxjs/toolkit";
import friendsSlice from "../AllSlice/Friends/friendsSlice";

const store = configureStore({
    reducer: {
        friends: friendsSlice,
    }
})

export default store;