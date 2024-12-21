import { Result } from "./Result"

export const Results = () => {
  return (
    <section className="mt-10 space-y-4 w-full">
      <Result resultType="years" />
      <Result resultType="months" />
      <Result resultType="days" />
    </section>
  )
}