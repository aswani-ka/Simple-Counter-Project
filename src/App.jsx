import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <div className='grid gap-5'>
      <h1 className='text-white font-bold'>Counter React Project</h1>
      <p className='text-2xl '>Counter Value : {counter}</p>
      <div className='flex gap-5 justify-center'>
        <button 
        onClick={addValue}
        className='shadow-lg'>Add Value</button>
        <button 
        onClick={removeValue}
        className='shadow-lg'>Remove Value</button>
      </div>
    </div>
  )
}

export default App
