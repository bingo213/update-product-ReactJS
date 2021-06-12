import axiosClient from "./axiosClient";

class ProductApi {
    getProduct = () =>{
        const url = '/products';
        return axiosClient.get(url)
    }
}

const productApi = new ProductApi();

export default productApi