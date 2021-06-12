import React, { useEffect, useState } from 'react';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import style from './Table.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

function Table({ currentProducts, color, onSubmit }) {
  // const { currentProducts, color, onSubmit } = props;
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Submit</button>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {currentProducts.map(item => (
            <TableRow
              key={item.id}
              id={item.id}
              errorDescription={item.errorDescription}
              sku={item.sku}
              name={item.name}
              image={item.image}
              currentColor={item.color ? color[item.color - 1].name : ''}
              color={color}
              register={register}
            />
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default Table;
