import API from ".";
import axios from "axios";

function fetchCats() {
  return axios.get(API.categories);
}

function fetchCatProducts(category: string) {
  return axios.get(`${API.categoryProducts}/${category}`);
}

const catsApi = {
  fetchCats,
  fetchCatProducts,
};

export default catsApi;
