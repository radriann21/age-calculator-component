import { CalculatorState } from "../types/types"
import { Result } from "./Result"
import { useSelector } from "react-redux"

export const Results = () => {
  const { resultDay, resultMonth, resultYear } = useSelector((state: CalculatorState) => state.calculator)

  return (
    <section className="mt-10 space-y-4 w-full">
      <Result result={resultYear} resultType="years" />
      <Result result={resultMonth} resultType="months" />
      <Result result={resultDay} resultType="days" />
    </section>
  )
}