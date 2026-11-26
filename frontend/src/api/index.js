const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL || 'http://localhost:8000';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/catagories/`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching catagories:', error);
    return [];
  }
};
export const product_details = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/api/add-to-cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      product_id: product.id,
      quantity: 1,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.detail || 'Could not add product to cart.');
  }

  return data;
};
export const fetchCart = async()=>{
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json();
}