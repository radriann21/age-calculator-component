export type initialState = {
  day: number;
  month: number;
  year: number;
  resultYear: string;
  resultMonth: string;
  resultDay: string;
}

export type CalculatorState = {
  calculator: initialState;
}