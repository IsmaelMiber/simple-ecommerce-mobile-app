import API from ".";
import axios from "axios";

function fetchProductById(id: number) {
  return axios.get(`${API.products}/${id}`);
}

function fetchProductsByIds(ids: number[]) {
  var requests = [];
  for (let id of ids) {
    requests.push(fetchProductById(id));
  }
  return Promise.all(requests);
}

const productsApi = {
  fetchProductById,
  fetchProductsByIds,
};

export default productsApi;
