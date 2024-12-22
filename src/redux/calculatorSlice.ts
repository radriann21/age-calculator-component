import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: 0,
  month: 0,
  year: 0
}

export const calculatorSlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload
    },
    setMonth: (state, action) => {
      state.month = action.payload
    },
    setYear: (state, action) => {
      state.year = action.payload
    }
  }
})

export const { setDay, setMonth, setYear } = calculatorSlice.actions
export default calculatorSlice.reducer