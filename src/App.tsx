import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './Componnents/Showinfo'
import type { ProductType } from './types/product';
function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Gam",
    age: 22
  });
  
  return (
    <div className="App">
      <ShowInfo info={info}/>
    </div>
  )
}

export default App