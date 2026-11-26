const backend = import.meta.env.VITE_DJANGO_BASE_URL || 'http://localhost:8000';
const base = import.meta.env.DEV ? '' : backend;

export function productImage(path) {
  if (!path) return 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600';
  const url = new URL(path, new URL('/media/', backend));
  return import.meta.env.DEV && url.pathname.startsWith('/media/') ? url.pathname + url.search : url.href;
}

async function request(path, options) {
  const response = await fetch(`${base}/api/${path}`, options);
  if (!response.ok) throw new Error(`Request failed (${response.status}).`);
  return response.json();
}

export const fetchProducts = () => request('products/');
export const fetchCategories = () => request('catagories/');
export const product_details = (id) => request(`products/${encodeURIComponent(id)}/`);
export const fetchCart = () => request('cart/', { credentials: 'include' });
export const addProduct = (product) => request('add-to-cart/', {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_id: product.id, quantity: 1 }),
});
