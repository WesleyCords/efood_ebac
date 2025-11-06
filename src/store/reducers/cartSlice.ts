import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
type CartState = {
  items: MenuItem[]
  open: boolean
  cartStep: number
  orderId?: string
}

const initialState: CartState = {
  items: [],
  open: false,
  cartStep: 0,
  orderId: undefined,
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
    addOrder: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
  },
})

export const { addItem, toggleCart, removeItem, moveToNextStep, addOrder } =
  cartSlice.actions
export default cartSlice.reducer
