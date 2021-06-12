import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import Block from './components/Modal/Block';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

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

  const [productChanged, setProductChanged] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  const onSubmit = data => {

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
        setProductChanged(oldArr => [...oldArr, tmp])
      }
    }
    console.log(productChanged);
    setIsOpen(true)
    setIsSubmit(true)
  };

  const onClose = () =>{
    setIsOpen(false)
  }
  
  return (
    loadColor || loadProduct ? (<p>Loading...</p>
      ) : 
    <div className="App">
      <p className="title">Jason - Re-upload Error Products</p>
      {isSubmit && productChanged.length==0 ? <ErrorMessage message="Nothing change" /> :
      <Modal open={isOpen} onClose={onClose}><Block productChanged={productChanged} /></Modal>}
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
