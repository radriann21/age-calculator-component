type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  error: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, placeholder, name, error, handleChange }: InputProps) => {

  const errorClass = error ? 'input-error' : ''
  const errorShow = error ? 'block' : 'hidden'

  return (
    <div className="w-full md:w-[20%]">
      <label className="block text-sm mb-2 uppercase font-semibold text-neutral-smokey-grey tracking-widest">{label}</label>
      <input onChange={handleChange} name={name} type="text" placeholder={placeholder} className={`text-base md:text-2xl font-bold input input-bordered w-full bg-white p-2 md:py-6 ${errorClass} text-neutral-off-black placeholder:text-neutral-smokey-grey md:p-4 focus:outline-none active:outline-none`} />
      <span className={`mt-2 block text-xs text-primary-light-red font-regular italic ${errorShow}`}>This field is required</span>
    </div>
  )
}