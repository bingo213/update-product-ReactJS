import React from 'react';
import style from './Block.module.css';

function Block({ productChanged }) {
  return (
      <>
        {productChanged.map(product => (
            <div className={style.container} key={product.id}>
              <img className={style.image} src={product.image} alt="" />
              <div className={style.info}>
                <p className={style.name}>{product.name}</p>
                <p>
                  <span>ID: </span>
                  {product.id}
                </p>
                <p>
                  <span>SKU: </span>
                  <span className={style.sku}>{product.sku}</span>
                </p>
                <p>
                  <span>Color: </span>
                  {product.color}
                </p>
              </div>
            </div>
          ))}
      </>
  )
}

export default Block;
