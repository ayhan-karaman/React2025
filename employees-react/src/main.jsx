import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'


function App() {

   const [count, setCount] = useState(0)
  function handleIncrement() {
 
    // setCount(count +1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  function handleDecrement() {
      setCount(count - 1);
  }
 

  return (
     <div>
       <h1>Count: {count} </h1>
       <div>
          <button onClick={handleIncrement} >Increment</button>
          <button onClick={handleDecrement} >Decrement</button>
       </div>
     </div>
  )
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
