import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Restaurant } from '../../types'

type CartState = {
  items: Restaurant[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
