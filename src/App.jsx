// src/App.jsx
import { useState , useEffect } from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import ProductList from "./pages/ProductList";
import Navbar from './components/NavBar'
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {

   const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await index()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />

      <h1>Hello world!</h1>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList products={products} />} />
      <Route path="/products/:productId" element={<ProductDetails products={products} />} />
      <Route path="/products/new" element={<ProductForm />} />
      <Route path="/products/:productid/edit" element={<UpdateProduct />} />

    </Routes>

    </>
  )


}

export default App
