import { Input } from "./Input"
import arrrow from "../assets/icon-arrow.svg"

export const InputsContainer = () => {
  return (
    <div className="w-full flex items-center space-x-4 md:space-x-8 relative mb-8">
      <Input label="Day" placeholder="DD" />
      <Input label="Month" placeholder="MM" />
      <Input label="Year" placeholder="YYYY" />
      <button className="absolute bottom-0 right-0 translate-y-20 -translate-x-20 md:translate-x-0 md:translate-y-16 btn btn-circle p-2 btn-lg bg-primary-custom-purple border-none">
        <img className="w-8 h-8" src={arrrow} alt="arrow" />
      </button>
    </div>
  )
}