 import React from 'react'
//  import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/cart/cart';
import Order from './Pages/order/order';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/admin/dashboard/dashboard';
import State from './Context/data/state';
 
 const App = () => {
   return (
    <State> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element= {<Order/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
      </State>
      
   )
   
 }
 
 export default App
 