import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <h1> previsão do tempo </h1>
        <input />
        <button>Buscar</button> 
      </div>  
    </>
  )
}

export default App
