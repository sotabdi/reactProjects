import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 5
}

const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        },
        decrement: (state, action) => {
            state.value--
        }
    }

});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;