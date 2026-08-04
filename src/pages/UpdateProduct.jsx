import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { show, update } from '../services/productService'

const UpdateProduct = () => {
  const { productId } = useParams()
  const navigate = useNavigate()


  const initialState = {
    title: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
  }

  const [productData, setProductData] = useState(initialState)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await show(productId)
      setProductData(data)
    }
    fetchProduct()
  }, [productId])

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedProduct = await update(productId, productData)
    navigate(`/products/${updatedProduct._id}`)
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        Title:
        <input type="text" name="title" value={productData.title} onChange={handleChange} required/>

        Description:
        <textarea name="description" value={productData.description} onChange={handleChange} maxLength={500}/>

        Category:
        <select name="category" value={productData.category} onChange={handleChange}>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          <option value="other">Other</option>
        </select>

        Price:
        <input type="number" name="price" value={productData.price} onChange={handleChange} required />

        Quantity:
        <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} min="0" required />

        <button type="submit">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct