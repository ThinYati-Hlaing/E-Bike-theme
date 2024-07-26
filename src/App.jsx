import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Product />
    </div>
  )
}

export default App