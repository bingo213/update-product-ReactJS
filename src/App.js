import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [loadProduct, setLoadProduct] = useState(true);

  const [color, setColor] = useState([]);
  const [loadColor, setLoadColor] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoadProduct(true);
      await axios
        .get('https://60ae0d5e80a61f00173324bc.mockapi.io/products')
        .then(result => {
          setProduct(result.data);
          setLoadProduct(false);
        })
        .catch(err => console.log(err));
    };

    const fetchColor = async () => {
      setLoadColor(true);
      await axios
        .get('https://60ae0d5e80a61f00173324bc.mockapi.io/colors')
        .then(res => {
          setColor(res.data);
          setLoadColor(false);
        })
        .catch(err => console.log(err));
    };
    fetchProduct();
    fetchColor();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const onSubmit = data => {
    const res = [];
    // const keys = Object.keys(data);
    for (let i of product) {
      let check = false;
      let tmp = { ...i };
      if (data[`name${i.id}`] && i.name !== data[`name${i.id}`]) {
        tmp = { ...tmp, name: data[`name${i.id}`] };
        check = true;
      }
      if (data[`sku${i.id}`] && i.sku !== data[`sku${i.id}`]) {
        tmp = { ...tmp, sku: data[`sku${i.id}`] };
        check = true;
      }
      if (!i.color && data[`color${i.id}`]) {
        tmp = { ...tmp, color: data[`color${i.id}`] };
        check = true;
      } else {
        if (
          data[`color${i.id}`] &&
          color[i.color - 1].name !== data[`color${i.id}`]
        ) {
          tmp = { ...tmp, color: data[`color${i.id}`] };
          check = true;
        }
      }
      if (check) {
        res.push(tmp);
      }
    }
    console.log(res);
  };
  
  return (
    loadColor || loadProduct ? (<p>Loading...</p>
      ) : 
    <div className="App">
      <Modal>Hi, I am Test</Modal>
      <Table
        currentProducts={currentProducts}
        color={color}
        onSubmit={onSubmit}
      />
      <Pagination
        productPerPage={productPerPage}
        totalProduct={product.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
