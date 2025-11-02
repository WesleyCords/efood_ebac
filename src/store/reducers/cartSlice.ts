import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { MenuItem } from '../../types'

type CartState = {
  items: MenuItem[]
  open: boolean
  cartStep: number
}

const initialState: CartState = {
  items: [],
  open: false,
  cartStep: 0,
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
    moveToNextStep: (state, action: PayloadAction<number>) => {
      if (action.payload > 3) {
        state.cartStep = 0
        state.items = []
        state.open = false
        return
      }
      state.cartStep = action.payload
    },
  },
})

export const { addItem, toggleCart, removeItem, moveToNextStep } =
  cartSlice.actions
export default cartSlice.reducer
