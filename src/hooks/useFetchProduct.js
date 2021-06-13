import React, { useState, useEffect } from 'react'
import axios from 'axios';

function useFetchProduct() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          await axios
            .get('https://60ae0d5e80a61f00173324bc.mockapi.io/products')
            .then(result => {
              setProduct(result.data);
            })
            .catch(err => console.log(err));
        };

        fetchProduct();
    }, [])
    return product;
}

export default useFetchProduct
