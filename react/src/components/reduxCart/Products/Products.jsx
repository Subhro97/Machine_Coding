import ProductItem from "./ProductItem.jsx";

import { DATA_ITEMS } from "../../../model/productItem.js";

const Products = () => {
  return (
    <section className="w-full p-3">
      <div className="flex gap-10 flex-wrap justify-between">
        {DATA_ITEMS.map((item, idx) => (
          <ProductItem
            key={`title-${idx}`}
            id={`item.name-${idx + 1}`}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
