import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: {},
}

const friendsSlice = createSlice({
    name: 'friendsSlice',
    initialState,
    reducers: {
        friendsInfo: (state, action) => {
            state.friends = action.payload
        }
    }

});

export default friendsSlice.reducer;
export const { friendsInfo } = friendsSlice.actions