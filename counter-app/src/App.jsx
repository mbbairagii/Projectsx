import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Button count={count} setCount={setCount} />
    </div>
  )
}

function Button(props){
  function handleClick(){
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={handleClick}>
      Count is {props.count}
    </button>
  )
}

export default App
