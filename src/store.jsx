import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/card/cardSlice'
import modelReducer from './features/model/modelSlice'
export const store = configureStore({
  reducer: {
    card: cardReducer,
    model: modelReducer,
  },
})
