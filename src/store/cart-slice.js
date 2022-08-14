import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        items: [],
        totalCartQuantity: 0,
        totalCartCost: 0,
        changed: false,
    },
    reducers: {
        replaceCart : (state, {payload}) => {
            state.items = payload.items;
            state.totalCartQuantity = payload.totalCartQuantity;
            state.totalCartCost = payload.totalCartCost;
        },

        addItemToCart : (state, {payload}) => {
            const newItem = payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalCartQuantity++;
            state.changed = true;

            if (!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                // existingItem.totalPrice = parseFloat(existingItem.price) * existingItem.quantity;
                // existingItem.totalPrice = parseFloat(existingItem.totalPrice) + parseFloat(existingItem.price);
            }
            // state.totalCartCost = state.totalCartCost + newItem.price;
            state.totalCartCost = parseFloat(state.totalCartCost) + parseFloat(newItem.price);
        },

        removeItemFromCart : (state, {payload}) =>{
            const id = payload;
            const existingItem = state.items.find(item => item.id === id);
            state.changed = true;

            existingItem.totalCartQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            
            state.totalCartCost = state.totalCartCost - existingItem.price;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;