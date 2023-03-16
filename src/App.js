import React from 'react'
import { Route, Routes } from "react-router-dom"
import Contact from './pages/contact/Contact'
import Home from "./pages/home/Home"
import Cart from "./pages/cartPage/CartPage"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App