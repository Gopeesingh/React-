import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: "Gopee",
  age: 21
}

let newArray = [1,2,3]
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
  <Card username="kalika bhavan 2 floor" btnText="click me"/>
  <Card username="kalika bhavan 1 floor"/>
    </>
  )
}

export default App
