import React from 'react';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
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
          {...register('name' + id)}
        />
      </td>
      <td>
        <input
          className={styles.sku}
          type="text"
          name="sku"
          defaultValue={sku}
          {...register('sku' + id, {
            required: "Required"
          })}
        />
        {/* <ErrorMessage message="SKU is required field"/> */}
      </td>
      <td>
        <select
          className={styles.color}
          name="color"
          defaultValue={currentColor}
          {...register('color' + id, {
            required: 'Required',
          })}
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
