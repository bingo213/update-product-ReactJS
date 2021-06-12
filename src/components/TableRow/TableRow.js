import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './TableRow.module.css';
import productApi from '../../api/productApi';

function TableRow(props) {
  const {id, errorDescription, image, name, sku, currentColor, color, register} = props
  return (
      <tr key={id}>
        <td>{id}</td>
        <td>{errorDescription}</td>
        <td>
          <img src={image} alt="" />
        </td>
        <td>
          <input type="text" name="name" defaultValue={name} {...register('name'+id)}/>
        </td>
        <td >
          <input type="text" name="sku" defaultValue={sku} {...register('sku'+id)} />
        </td>
        <td>
          <select
            name="color"
            defaultValue={currentColor}
            {...register('color'+id)}
          >
            <option disabled value="">
              Select Value
            </option>
            {
              color.map(c => <option value={c.name} key={c.id}>{c.name}</option>)
            }
          </select>
        </td>
      </tr>
  );
}

export default TableRow;
