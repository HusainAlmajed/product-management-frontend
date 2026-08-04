// src/App.jsx
import { useState } from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import ProductList from "./pages/ProductList";
import Navbar from './components/NavBar'

const App = () => {
  return (
    <>
      <Navbar />
      
      <h1>Hello world!</h1>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/products/new" element={<ProductForm />} />

    </Routes>

    </>
  )


}

export default App
