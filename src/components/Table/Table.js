import React from 'react';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import style from './Table.module.css';
import { useForm } from 'react-hook-form';

function Table({ currentProducts, color, onSubmit }) {
  const { register, handleSubmit, formState:{errors} } = useForm();

  return (
    <div className={style.tab}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.btnContainer}>
        <button type="submit">
          <i className="fal fa-arrow-to-top"></i>Submit
        </button>
      </div>
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
              errors={errors}
            />
          ))}
        </tbody>
      </table>
    </form>
    </div>
  );
}

export default Table;
