const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (productData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (productId, productData) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: 'DELETE',
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteProduct,
}