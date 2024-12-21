import { InputsContainer } from "./components/InputsContainer"
import { Results } from "./components/Results"

function App() {
  return (
    <main className="min-h-screen max-w-full bg-neutral-off-white flex items-center justify-center p-2 md:p-0">
      <section className="w-full md:w-[620px] bg-white rounded-md rounded-br-[40px] shadow-md h-fit p-8">
        <InputsContainer />
        <div className="divider text-neutral-smokey-grey"></div>
        <Results />
      </section>
    </main>
  )
}

export default App
