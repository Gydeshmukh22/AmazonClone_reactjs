// import { createSlice } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    // name:'',
    // price:0
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            // logic for adding items to basket

            state.items = [...state.items, action.payload]


        },
        removelFromBasket(state, action) {
            // logic for removing item from basket

            const newState = state.items

            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            )

            newState.splice(index, 1)
            state.items = newState
        }

    }
})

export const { addToBasket, removelFromBasket } = basketSlice.actions

export default basketSlice.reducer

