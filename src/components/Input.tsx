type InputProps = {
  label: string;
  placeholder: string
}

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="w-full md:w-[20%]">
      <label className="block text-sm mb-2 uppercase font-semibold text-neutral-smokey-grey tracking-widest">{label}</label>
      <input type="text" placeholder={placeholder} className="text-base md:text-2xl font-bold input input-bordered w-full bg-white p-2 md:py-6" />
    </div>
  )
}