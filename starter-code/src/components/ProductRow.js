import React from "react";

const productRow = (props) => {
  let outOfStock ={};
  if (!props.product.stocked) outOfStock={color:"red"};
  
  return (
    <tr style={outOfStock}>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default productRow;