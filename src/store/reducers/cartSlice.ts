import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { MenuItem } from '../../types'

type CartState = {
  items: MenuItem[]
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
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    toggleCart: (state) => {
      state.open = !state.open
    },
    removeItem: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addItem, toggleCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
