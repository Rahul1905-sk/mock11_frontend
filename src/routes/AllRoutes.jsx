import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Profile from '../components/Profile'
import EmiPage from '../components/EmiPage'

const AllRoutes = () => {

  return (
    
    <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/getEmi" element={<EmiPage />} />
          
    </Routes>


  )
}

export default AllRoutes