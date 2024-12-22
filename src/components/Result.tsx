type ResultProps = {
  resultType: string;
  result: string;
}

export const Result = ({ resultType, result }: ResultProps) => {
  return (
    <h2 className="font-bold text-3xl md:text-6xl text-neutral-off-black">
      <span className="result text-primary-custom-purple">
        {result}
      </span> {resultType}
    </h2>
  )
}