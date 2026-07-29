import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home from '../pages/Home'
import  Service from '../pages/Service'
import  Shop from '../pages/Shop'
import  Contact from '../pages/Contact'
import  Men from '../pages/Men'
import  Women from '../pages/Women'
import  Kids from '../pages/Kids'
import  Footwear from '../pages/Footwear'
import  Accessories from '../pages/Accessories'
import  About from '../pages/About'
import  Winter from '../pages/Winter'
import  Summer from '../pages/Summer'
import  NotFound from '../pages/NotFound'
import Security from '../pages/Security'
import Cartpage from '../pages/Cartpage'
import ThemeContext from '../context/ThemeContext'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import ProtectedRoute from './ProtectedRoute'
import Productinfo from '../components/Productinfo'
const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/about' element={<About  />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/men' element={<Men />}/>
            <Route path='/women' element={<Women />}/>
            <Route path='/kids' element={<Kids />}/>
            <Route path='/footwear' element={<Footwear />}/>
            <Route path='/accessories' element={<Accessories />}/>
            <Route path='/winter' element={<Winter  />}/>
            <Route path='/summer' element={<Summer />}/>
            <Route path='/*' element={<NotFound />}/>
            <Route path='/security' element={<Security />}/>
            <Route path='/themeContext' element={<ThemeContext />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/logout' element={<Logout />}/>
            <Route path="/product/:id" element={<Productinfo />} />
             <Route
            path="/cart"
            element={
            <ProtectedRoute>
            <Cartpage />
            </ProtectedRoute>
             }
            />
        </Routes>
    </div>
  )
}

export default AppRoutes