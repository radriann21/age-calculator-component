type ResultProps = {
  resultType: string;
}

export const Result = ({ resultType }: ResultProps) => {
  return (
    <h2 className="font-bold text-3xl md:text-6xl text-neutral-off-black"><span className="result text-primary-custom-purple">--</span> {resultType}</h2>
  )
}