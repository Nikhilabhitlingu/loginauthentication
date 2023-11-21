


import React from 'react'
import LoginPage from '../pre-auth screens/login'
import Register from '../pre-auth screens/register'
import ForgotPassword from '../pre-auth screens/forgot password'
import { Route, Routes } from 'react-router-dom'

import Invalid from '../pre-auth screens/invalid'

function PreAuthenticaton() {
  return (
    <>
    <Routes>

        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/forgot password" element={<ForgotPassword/>}/>
        <Route path='*' element={<Invalid/>}/>

       

    </Routes>
    
    </>
  )
}

export default PreAuthenticaton