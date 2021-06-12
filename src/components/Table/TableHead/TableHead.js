import React from 'react'
import style from './TableHead.module.css';

function TableHead() {
    return (
        <tr className={style.tbHead}>
            <th>ID</th>
            <th>Error Description</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Color</th>
        </tr>
    )
}

export default TableHead
