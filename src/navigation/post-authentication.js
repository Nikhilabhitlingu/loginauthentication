



import React from 'react'
import HomeComponent from '../screens/home'
import MenuComponent from '../screens/menu'
import ContactComponent from '../screens/contact'
import AboutComponent from '../screens/about'
import InvalidComponent from '../screens/Invalid'
import ProductsScreen from '../screens/products screen'
import { Route, Routes } from 'react-router-dom'

function PostAuthentication() {
  return (
    <>
    <Routes 
    
    
    >
            <Route path="/*" element={<HomeComponent/>}/>
            <Route path="/menu" element={<MenuComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/about" element={<AboutComponent/>}/>
            <Route path="/" element={<InvalidComponent/>}/>
            <Route path="/products/:id" element={<ProductsScreen/>}/>
    </Routes>
    
    </>
  )
}

export default PostAuthentication