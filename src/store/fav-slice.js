import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice ({
    name: 'fav',
    initialState : {
        favItems: [],
        totalFavQuantity: 4,
    },

    reducers: {
        addToFavourites(state, action){
            const newFav = action.payload;
            state.totalFavQuantity++;
            state.favItems.push({
                id: newFav.id,
                price: newFav.price,
                name: newFav.name,
                description: newFav.description,
                src: newFav.src,
            })
        },

        removeFromFavourites(state, action) {
            const id = action.payload;
            state.favItems = state.favItems.filter((favItem) => favItem.id !== id);
            state.totalFavQuantity--;
        }
    }
})

export const favActions = favSlice.actions;
export default favSlice;