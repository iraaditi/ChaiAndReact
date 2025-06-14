import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    let temp = counter+1;
    if(temp>20) {
      console.log("Can't go above 20")
    }else{
      setCounter(counter+1)
    }
  }
  const removeValue = () =>{
    let temp = counter-1;
    if(temp<0) {
      console.log("Can't go below 0")
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>Counter Play</h1>
     <p>Click on the buttons to add or sutract value</p>
     <h4>Count : {counter}</h4>
     <button
     onClick={addValue}
     >Add Value: {counter}</button>
     <br/> <br/>
     <button
     onClick={removeValue}
     >Remove Value: {counter}</button>
    </>
  )
}

export default App
