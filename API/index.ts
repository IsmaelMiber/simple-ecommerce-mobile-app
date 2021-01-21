const BASE_URL = "https://fakestoreapi.com";
const PRODUCTS_URL = `${BASE_URL}/products`;

const API = {
  products: PRODUCTS_URL,
  categories: `${PRODUCTS_URL}/categories`,
  categoryProducts: `${PRODUCTS_URL}/category`,
};

export default API;
