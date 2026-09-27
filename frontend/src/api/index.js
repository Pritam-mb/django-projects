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
