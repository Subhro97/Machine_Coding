import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list-cont">
      {products.map((product, idx) => (
        <Product
          key={crypto.randomUUID()}
          image={product.images[0]}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
