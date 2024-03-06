import React from 'react'
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Shipping from './pages/Shipping';
import Logind from './pages/Logind';
import Order from './pages/Order';
import Signin from './pages/Sign in';
const Home = lazy( () => import ("./pages/Home"))
const Search = lazy( () => import ("./pages/Search"))
const Cart = lazy( () => import ("./pages/Cart"));





const App = () => {
  return (
    <Router>
      <Header></Header>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/register' element={<Signin/>}></Route>

        <Route path='/login' element={<Logind/>}></Route>

        <Route path='/shipping' element={<Shipping></Shipping>}></Route>

        <Route path='/orders' element={<Order/>}></Route>
      </Routes>
    </Suspense>
    </Router>
  )
}

export default App