import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination/Pagination';
import Block from 'components/Modal/Block';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import useFetchProduct from 'hooks/useFetchProduct';
import useFetchColor from 'hooks/useFetchColor';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const product = useFetchProduct();
  const color = useFetchColor();

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState('Nothing Change');

  const [productChanged, setProductChanged] = useState([]);
  const onSubmit = data => {
    for (let i of product) {
      let check = false;
      let tmp = { ...i };
      //Validate product name
      if (typeof data[`name${i.id}`] !== 'undefined') {
        if (data[`name${i.id}`] === '')
          setMessage('Product name is required field');
        else if (data[`name${i.id}`].length > 50)
          setMessage('Max length of product name is 50 characters');
        else if (i.name !== data[`name${i.id}`]) {
          tmp = { ...tmp, name: data[`name${i.id}`] };
          check = true;
        }
      }
      //Validate sku
      if (typeof data[`sku${i.id}`] !== 'undefined') {
        if (data[`sku${i.id}`] === '') setMessage('Sku is required field');
        else if (data[`sku${i.id}`].length > 20)
          setMessage('Max length of sku is 20 characters');
        else if (i.sku !== data[`sku${i.id}`]) {
          tmp = { ...tmp, sku: data[`sku${i.id}`] };
          check = true;
        }
      }
      //Check color
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
        setProductChanged(oldArr => [...oldArr, tmp]);
      }
    }
    setIsOpen(true);
    setIsSubmit(true);
  };

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const onOK = () => {
    window.location.reload();
  };

  //Close modal
  const onClose = () => {
    setIsOpen(false);
    setProductChanged([]);
    setIsSubmit(false);
  };

  return (
    color.length !== 0 &&
    product.length !== 0 && (
      <div className="App">
        <p id="title">Jason - Re-upload Error Products</p>
        {message.length == 0 && message}
        {isSubmit && productChanged.length == 0 ? (
          <ErrorMessage message={message} />
        ) : (
          <Modal open={isOpen} onClose={onClose} onOK={onOK}>
            <Block productChanged={productChanged} />
          </Modal>
        )}
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
    )
  );
}

export default HomePage;
