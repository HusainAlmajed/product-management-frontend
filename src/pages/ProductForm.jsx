import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { create } from '../services/productService'

const ProductForm = () => {
  const navigate = useNavigate()

  const initialState = {
    title: '',
    description: '',
    category: 'electronics',
    price: '',
    quantity: '',
  }

  const [productData, setProductData] = useState(initialState)

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newProduct = await create(productData)
    navigate(`/products/${newProduct._id}`)
  }

  return (
    <div>
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        Title:
        <input type="text" name="title" value={productData.title} onChange={handleChange} required/>

        Description:
        <textarea name="description" value={productData.description} onChange={handleChange} maxLength={500}/>

        Category:
        <select name="category" value={productData.category} onChange={handleChange} >
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

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default ProductForm