import { useState } from 'react'


function App() {

  let [counter, setcounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if (counter < 20) {

      counter = counter + 1
      setcounter(counter)
      console.log(counter)

    }

  }

  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1
      setcounter(counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
