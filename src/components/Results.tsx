import { Result } from "./Result"
import { useSelector } from "react-redux"

export const Results = () => {

  const { day, month, year } = useSelector((state: any) => state.calculator)

  return (
    <section className="mt-10 space-y-4 w-full">
      <Result result={year} resultType="years" />
      <Result result={month} resultType="months" />
      <Result result={day} resultType="days" />
    </section>
  )
}