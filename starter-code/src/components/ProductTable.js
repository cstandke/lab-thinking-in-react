import React from "react";
import ProductRow from "./ProductRow.js";

const productTable = props => {
  const prodRows = props.products.map(p => {
    return <ProductRow product={p} />;
  });
  // console.log(props.products);
  return (
    <table>
      <tbody>{prodRows}</tbody>
    </table>
  );
};

export default productTable;
