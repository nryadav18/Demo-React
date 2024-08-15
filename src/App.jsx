import { useState } from 'react'
import './App.css'
import First from './components/first'
import Second from './components/second'
import Third from './components/third'
import Fourth from './components/fourth'
import Fifth from './components/fifth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth />
    </>
  )
}

export default App
