import { useState } from 'react'


function App() {
  const [color, setColor] = useState("yellow")

  return (
    
    <div className='w-full h-screen duration-200'
    style={{background : color}}>

      <div className='fixed flex flex-wrap
      justify-center bottom-12 insert-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl">

        <button
         onClick={()=> setColor("red")}
         className="outline-non px-4 rounded-full text-white shadow-lg"
         style={{backgroundColor: "red"}}>Red</button>
 
      </div>
      </div>
    </div>
  )
}

export default App
