import { useState } from 'react'
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculator/>
    </div>
  )
}

export default App
