import { createSlice } from '@reduxjs/toolkit'
import cardData from '../../cardData'

const initialState = {
  cardItems: cardData,
  total: 0,
  amount: 2,
  isLoading: true,
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const cardItem = state.cardItems.find((item) => item.id === payload.id)
      cardItem.amount = cardItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cardItem = state.cardItems.find((item) => item.id === payload.id)
      cardItem.amount = cardItem.amount - 1
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      state.cardItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const { clearCard, removeItem, increase, decrease, calculateTotal } =
  cardSlice.actions
export default cardSlice.reducer
