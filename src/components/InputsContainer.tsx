import { Input } from "./Input"
import arrrow from "../assets/icon-arrow.svg"
import { useDispatch } from "react-redux"
import { setMonth, setDay, setYear, calculateAge } from "../redux/calculatorSlice"

export const InputsContainer = () => {

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget
    const value = Number(e.currentTarget.value)
    switch (name) {
      case "day":
        dispatch(setDay(value))
        break
      case "month":
        dispatch(setMonth(value))
        break
      case "year":
        dispatch(setYear(value))
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    dispatch(calculateAge())
  }

  return (
    <div className="w-full flex items-center space-x-4 md:space-x-8 relative mb-8">
      <Input handleChange={handleChange} label="Day" placeholder="DD" name="day" />
      <Input handleChange={handleChange} label="Month" placeholder="MM" name="month" />
      <Input handleChange={handleChange} label="Year" placeholder="YYYY" name="year" />
      <button onClick={handleSubmit} className="absolute bottom-0 right-0 translate-y-20 -translate-x-20 md:translate-x-0 md:translate-y-16 btn btn-circle p-2 btn-lg bg-primary-custom-purple border-none no-animation">
        <img className="w-8 h-8" src={arrrow} alt="arrow" />
      </button>
    </div>
  )
}