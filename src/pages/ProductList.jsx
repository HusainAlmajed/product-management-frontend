import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { index } from '../services/productService'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await index()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList