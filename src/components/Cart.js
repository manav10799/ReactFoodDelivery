import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex my-4 justify-between">
        <h1 className="text-2xl font-bold mx-4">Cart</h1>
        <button
          className="shadow-md py-1 px-4 bg-red-400 text-white rounded-md cursor-pointer"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>
      {cartItem.length === 0 && <h1>Cart is Empty</h1>}
      {cartItem.map((items, i) => {
        return (
          <div
            className="w-1/4 shadow-lg rounded-md p-4 mb-2"
            data-testid="addedCartItems"
            key={items.card.info.id + i}
          >
            <div>
              <div className="flex justify-between">
                <h4 className="text-lg mb-2">{items.card.info.name} </h4>
                <p>₹{items.card.info.price / 100}</p>
              </div>
              <p className="text-sm my-1 text-gray-400">
                {items.card.info.description}
              </p>
              <button
                className="shadow-md py-1 px-4 bg-red-400 text-white rounded-md cursor-pointer"
                onClick={() => {
                  dispatch(removeItem(i));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
