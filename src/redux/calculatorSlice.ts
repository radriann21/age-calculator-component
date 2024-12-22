import { createSlice } from "@reduxjs/toolkit";
import type { initialState } from "../types/types";

const initialState: initialState = {
  day: 0,
  month: 0,
  year: 0,
  resultYear: "--",
  resultMonth: "--",
  resultDay: "--",
  error: false
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
    },
    calculateAge: (state) => {
      if (state.day === 0 || state.month === 0 || state.year === 0) {
        state.error = true
        return
      }

      const { day, month, year } = state
      const actualDate = new Date()

      const resultYear = actualDate.getFullYear() - year
      const resultMonth = actualDate.getMonth() + 1 - month
      const resultDay = actualDate.getDate() - day

      state.resultYear = resultYear.toString()
      state.resultMonth = resultMonth.toString()
      state.resultDay = resultDay.toString()
      state.error = false
    }
  }
})

export const { setDay, setMonth, setYear, calculateAge } = calculatorSlice.actions
export default calculatorSlice.reducer