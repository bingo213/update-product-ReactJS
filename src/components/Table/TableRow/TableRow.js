import React from 'react';
import styles from './TableRow.module.css';

function TableRow(props) {
  const {
    id,
    errorDescription,
    image,
    name,
    sku,
    currentColor,
    color,
    register,
    errors,
  } = props;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{errorDescription}</td>
      <td>
        <img src={image} alt="" />
      </td>
      <td>
        <input
          className={styles.productName}
          type="text"
          name="name"
          defaultValue={name}
          {...register('name' + id, {
            required: 'This field is required',
            maxLength: {
              value: 50,
              message: 'Max length of product name is 50 characters',
            },
          })}
        />
        {errors[`name${id}`] && (
          <p className={styles.errMessage}>{errors[`name${id}`].message}</p>
        )}
      </td>
      <td>
        <input
          className={styles.sku}
          type="text"
          name="sku"
          defaultValue={sku}
          {...register('sku' + id, {
            required: 'This field is required',
            maxLength: {
              value: 20,
              message: 'Max length of sku is 20 characters',
            },
          })}
        />
        {errors[`sku${id}`] && (
          <p className={styles.errMessage}>{errors[`sku${id}`].message}</p>
        )}
      </td>
      <td>
        <select
          className={styles.color}
          name="color"
          defaultValue={currentColor}
          {...register('color' + id)}
        >
          <option disabled value="">
            Select Value
          </option>
          {color.map(c => (
            <option value={c.name} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}

export default TableRow;
