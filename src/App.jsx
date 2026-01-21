import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import Create from './Pages/Create'
import Error from './Pages/Error'
import Buypage from './Pages/Buypage'
import Signup from './Pages/Signup'
import Pricing from './Pages/Pricing'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/buypage' element={<Buypage />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Signup />} />
        <Route path='/create' element={<Create />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App