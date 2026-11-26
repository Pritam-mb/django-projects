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

export const addProduct = async(product)=>{
  try{
    const productId = product.id;
    const product = await fetch(`${BASE_URL}/api/products/${productId}/`)
    if (!product.ok) throw new Error('Network response was not ok');
    const response = await fetch(`${BASE_URL}/api/cart/add/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId ,
        quantity: 1
      }),
    });
   if (response.ok) {
        setMessage(`${product.name} added to cart!`);
        return response.json();

    } else {
        setMessage("Could not add product to cart.");
    }
  }catch(error){
    console.error('Error adding product:', error);
  }
}