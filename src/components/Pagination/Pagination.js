import React, { useState } from 'react';
import './Pagination.css'

function Pagination({ productPerPage, totalProduct, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  return (
    <div className="Pagination">
      <ul className="pageNumberContainer">
        {pageNumber.map(number => (
          <li key={number}>
            <a
              onClick={() => {
                paginate(number);
                setActivePage(number);
              }}
            //   href="#ListRentalUnit"
              className={
                number === activePage ? 'pageLink activePage' : 'pageLink'
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;