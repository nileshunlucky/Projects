import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { useState } from 'react'


function App() {
  const [cart, setCart] = useState(0);
  return (
    <>
      <Navbar cart={cart} />
      <Home  cart={cart} setCart={setCart}/>
      <Footer />
    </>
  )
}

export default App
