import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
    cart: [],
    total: 0,
}
const CardSlice = createSlice({
    name: 'cart',
    initialState
}) 
export default CardSlice.reducer;