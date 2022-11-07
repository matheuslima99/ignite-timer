import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const [activeCycle] = useContext(CycleContext)

  return <h1>Form {activeCycle}</h1>
}

function Countdown() {
  const [activeCycle, setActiveCycle] = useContext(CycleContext)

  return (
    <div>
      <h1>Countdown {activeCycle} </h1>
      <button onClick={() => setActiveCycle((state: number) => state + 1)}>
        mUDAR PARA 3
      </button>
    </div>
  )
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(1)

  return (
    <CycleContext.Provider value={[activeCycle, setActiveCycle]}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CycleContext.Provider>
  )
}
