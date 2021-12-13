import axios from "axios";

const ItemApi = {
    getAll: () => axios.get(`http://localhost:8080/item`),
    getOne: (id) => axios.get(`http://localhost:8080/item/${id}`),
    getSearch: (title) => axios.get(`http://localhost:8080/item/search?name=${title}`),
    getSortPrice: () => axios.get(`http://localhost:8080/item/sort?name=price`),
};

export default ItemApi;