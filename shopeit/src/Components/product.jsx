import React from "react";
import ChildProduct from "./ChildProduct";

const Product = ({ filter }) => {
  return (
    <div className="products" id="products">
      {filter.map((product) => {
        return <ChildProduct key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Product;