import { addToCartAction } from "@/redux/cart/cartAction";
import { useDispatch } from "react-redux";

const ProductItem = ({ id, imageUrl, name, price }) => {
  const dispatch = useDispatch();

  const product = {
    id,
    name,
    price,
  };

  return (
    <article className="flex w-80 gap-1 justify-between">
      <div className="max-w-36 flex object-cover">
        <img className="w-full" src={imageUrl} alt={name} />
      </div>
      <div className="flex flex-col mt-5 max-w-36 w-full">
        <p className="font-bold text-xl">{name}</p>
        <p className="text-lg">{price}</p>
        <button
          className="max-w-36 mt-5 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white"
          onClick={() => dispatch(addToCartAction(product))}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
