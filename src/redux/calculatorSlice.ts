import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: 0,
  month: 0,
  year: 0,
  resultYear: "--",
  resultMonth: "--",
  resultDay: "--"
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
      const { day, month, year } = state
      const actualDate = new Date()

      const resultYear = actualDate.getFullYear() - year
      const resultMonth = actualDate.getMonth() + 1 - month
      const resultDay = actualDate.getDate() - day

      state.resultYear = resultYear.toString()
      state.resultMonth = resultMonth.toString()
      state.resultDay = resultDay.toString()
    }
  }
})

export const { setDay, setMonth, setYear, calculateAge } = calculatorSlice.actions
export default calculatorSlice.reducer