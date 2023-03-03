import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            // console.log(typeof action.payload)
            // state.cartItems.map(item=>console.log(typeof item.id))
            return state.filter(item=>{return action.payload!==item.id})
        },
        clear(state, action) {
            return state = []
        }
    }
})

export const { add, remove, clear, total } = cartSlice.actions
export default cartSlice.reducer