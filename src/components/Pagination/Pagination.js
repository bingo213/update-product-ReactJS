import React, { useState } from 'react';
import style from './Pagination.module.css'

function Pagination({ productPerPage, totalProduct, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  return (
    <div className={style.pagination}>
      <ul className="pageNumberContainer">
        {pageNumber.map(number => (
          <li key={number} className={
                number === activePage ? style.activePage : style.pageLink
              }>
            <a
              onClick={() => {
                paginate(number);
                setActivePage(number);
              }}
              href="#title"
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