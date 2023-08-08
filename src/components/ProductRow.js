import React from 'react';

function ProductRow(props) {
  const textColor = props.product.inStock ? 'black' : 'red';

  return (
    <tr> 
      <td style={{ color: textColor }}>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;

