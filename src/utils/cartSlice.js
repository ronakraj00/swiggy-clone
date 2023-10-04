import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, actions) => {
            state.items.push(actions.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
