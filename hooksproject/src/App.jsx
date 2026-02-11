import { useState } from "react"


const App = () => {
  let [counter, setcounter] = useState(0)

  const addvalue = () => {
    if (counter < 10) {
      counter = counter + 1;
      setcounter(counter)
    }
  }

  const subtravtvalue = () => {
    if (counter > 0) {


      counter = counter - 1
      setcounter(counter)
    }
  }

  const reset = () => {
    counter = 0
    setcounter(counter)
  }

  return (
    <>
      <h1>counter App</h1>
      <h2>counter is :{counter}</h2>
      <button onClick={addvalue}>addvalue</button>
      <button onClick={subtravtvalue}>subtractvalue</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App