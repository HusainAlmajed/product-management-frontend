import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { show } from '../services/productService'

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
    //   console.log(productId)
      const productData = await show(productId)
    //   console.log(productData)
      setProduct(productData)
    }
    fetchProduct()
  }, [productId])

  if (!product) return <p>Loading...</p>

  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      <Link to={`/products/${product._id}/edit`}>Edit</Link>
      <br />
      <Link to="/products">Back to Products list</Link>
    </div>
  )
}

export default ProductDetails