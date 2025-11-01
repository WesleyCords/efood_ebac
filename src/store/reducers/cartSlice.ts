import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Restaurant } from '../../types'

type CartState = {
  items: Restaurant[]
  open: boolean
}

const initialState: CartState = {
  items: [],
  open: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    },
    toggleCart: (state) => {
      state.open = !state.open
    },
  },
})

export const { addItem, toggleCart } = cartSlice.actions
export default cartSlice.reducer
