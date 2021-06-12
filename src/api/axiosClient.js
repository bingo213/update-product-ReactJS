import axios from 'axios'

// const BASE_URL = "
const axiosClient = axios.create({
    baseURL: "https://60ae0d5e80a61f00173324bc.mockapi.io/"
})

axiosClient.interceptors.response.use(res =>{
    if (res && res.data){
        return res.data;
    }

    return res;
}, err =>{
    throw err
})

export default axiosClient;